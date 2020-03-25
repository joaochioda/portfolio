import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import { useStyles } from '../components/ContactCss';
import { useTranslation } from 'react-i18next';
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';

export const Contact = () => {
	const { t } = useTranslation();
	const classes = useStyles();
	const [values, setValues] = React.useState('');
	const [disabledButton, setDisabledButton] = React.useState(false);
	const [openSucess, setOpenSucess] = React.useState(false);
	const [openError, setOpenError] = React.useState(false);
	const [valid, setValid] = React.useState({
		email: Boolean,
		name: Boolean,
		subject: Boolean,
		message: Boolean
	});

	const handleChange = event => {
		event.persist();
		setValues(values => ({ ...values, [event.target.name]: event.target.value }));
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

		if((values.email || []).length > 0) {
			email = true;
		}
		if((values.name || []).length > 0) {
			name = true;
		} 
		if((values.subject || []).length > 0) {
			subject = true;
		}
		if((values.message || []).length > 0) {
			message = true;
		}

		setValid({email, name, subject, message});

		if (email && name && subject && message) {
			sendEmail();
		}
	};

	const sendEmail = () => {
		setDisabledButton(true);
		axios({
			method: 'post',
			url: 'https://us-central1-portfolio-joao.cloudfunctions.net/sendMail',
			data: {
				'email': values.email,
				'name': values.name,
				'subject': values.subject,
				'message': values.message
			}
		}).then(() => {
			setOpenSucess(true);
			setDisabledButton(false);

		})
			.catch(error => {
				setDisabledButton(false);
				setOpenError(true);
				console.log(error);
			});
	};

	const showError = (type) => {
		const string = values[type];
		const verified = valid[type];
		if(!verified) {
			return true;
		}
		else if (string === undefined) {
			return false;
		}
		else if (verified) {
			return false;
		}else if (!verified && string.length > 0) {
			return false;
		}
	};

	return (<div>
		<form className={classes.root} noValidate autoComplete="off">
			<TextField id="outlined-basic"
				label={t('contact.email')}
				variant="outlined"
				name="email"
				required
				error={showError('email')}
				helperText={showError('email') ? t('contact.required') : ''}
				value={values.email}
				onChange={handleChange} />
			<TextField id="outlined-basic"
				label={t('contact.name')}
				variant="outlined"
				name="name"
				error={showError('name')}
				helperText={showError('name') ? t('contact.required') : ''}
				required
				value={values.name}
				onChange={handleChange} />
			<TextField id="outlined-basic"
				label={t('contact.subject')}
				variant="outlined"
				name="subject"
				error={showError('subject')}
				helperText={showError('subject') ? t('contact.required') : ''}
				required
				value={values.subject}
				onChange={handleChange} />
			<TextField
				id="filled-multiline-flexible"
				label={t('contact.message')}
				multiline
				required
				error={showError('message')}
				helperText={showError('message') ? t('contact.required') : ''}
				rowsMax="4"
				name="message"
				value={values.message}
				onChange={handleChange}
				variant="outlined"
			/>
		</form>
		<div>
			<Button id="count-up" variant="contained" color="primary" onClick={() => validateInputs()} disabled={disabledButton}>
				{t('contact.send')}
			</Button>
		</div>
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
	</div>);
};