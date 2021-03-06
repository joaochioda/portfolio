import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { useTranslation } from 'react-i18next';
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import { TextFieldCustom, FormCustom, ButtonDiv } from './ContactCss';
import { Config } from '../../.keys/firebase.js';

firebase.initializeApp(Config);

export const Contact = () => {
  const { t } = useTranslation();
  const [values, setValues] = React.useState({
    name: '', subject: '', email: '', message: '',
  });
  const [disabledButton, setDisabledButton] = React.useState(false);
  const [openSucess, setOpenSucess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [valid, setValid] = React.useState({
    email: Boolean,
    name: Boolean,
    subject: Boolean,
    message: Boolean,
  });

  // data.key, data.val().title, data.val().description

  const handleChange = (nameField, valueField) => {
    setValues((values) => ({ ...values, [nameField]: valueField }));
  };

  const handleClose = () => {
    setOpenError(false);
    setOpenSucess(false);
  };

  const validateInputs = () => {
    let email = false;
    let name = false;
    let subject = false;
    let message = false;

    if ((values.email || []).length > 0) {
      email = true;
    }
    if ((values.name || []).length > 0) {
      name = true;
    }
    if ((values.subject || []).length > 0) {
      subject = true;
    }
    if ((values.message || []).length > 0) {
      message = true;
    }

    setValid({
      email, name, subject, message,
    });

    if (email && name && subject && message) {
      sendEmail();
    }
  };

  const sendEmail = async () => {
    setDisabledButton(true);

    await firebase.database().ref('messages').push({
      email: values.email,
      name: values.name,
      subject: values.subject,
      message: values.message,
    });

    setOpenSucess(true);
    setDisabledButton(false);
  };

  const showError = (type) => {
    const string = values[type];
    const verified = valid[type];
    if (!verified) {
      return true;
    }
    if (string === undefined) {
      return false;
    }
    if (verified) {
      return false;
    } if (!verified && string.length > 0) {
      return false;
    }
  };
  return (
    <div id="contact">
      <FormCustom
        noValidate
        autoComplete="off"

      >
        <TextFieldCustom
          id="contact-text-email"
          style={{ marginTop: '8px' }}
          data-testid="batata"
          label={t('contact.email')}
          variant="outlined"
          name="email"
          required
          error={showError('email')}
          helperText={showError('email') ? t('contact.required') : ''}
          value={values.email}
          onChange={(event) => handleChange(event.target.name, event.target.value)}
        />
        <TextFieldCustom
          style={{ marginTop: '8px' }}
          id="outlined-basic"
          label={t('contact.name')}
          variant="outlined"
          name="name"
          error={showError('name')}
          helperText={showError('name') ? t('contact.required') : ''}
          required
          value={values.name}
          onChange={(event) => handleChange(event.target.name, event.target.value)}
        />
        <TextFieldCustom
          style={{ marginTop: '8px' }}
          label={t('contact.subject')}
          variant="outlined"
          name="subject"
          error={showError('subject')}
          helperText={showError('subject') ? t('contact.required') : ''}
          required
          value={values.subject}
          onChange={(event) => handleChange(event.target.name, event.target.value)}
        />
        <TextFieldCustom
          style={{ marginTop: '8px' }}
          label={t('contact.message')}
          multiline
          required
          error={showError('message')}
          helperText={showError('message') ? t('contact.required') : ''}
          rowsMax="4"
          name="message"
          value={values.message}
          onChange={(event) => handleChange(event.target.name, event.target.value)}
          variant="outlined"
        />
      </FormCustom>
      <ButtonDiv>
        <Button id="contact-send" variant="contained" color="primary" onClick={() => validateInputs()} disabled={disabledButton}>
          {t('contact.send')}
        </Button>
      </ButtonDiv>
      <Snackbar open={openSucess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {t('contact.sucess')}
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {t('contact.error')}
        </Alert>
      </Snackbar>
    </div>
  );
};
