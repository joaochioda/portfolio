import React from 'react';
import { useStyles } from '../components/ContactCss';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';

export function Contact() {
	const { t } = useTranslation();
	const classes = useStyles();
	const [values, setValues] = React.useState('');

	const handleChange = event => {
		event.persist();
		setValues(values => ({ ...values, [event.target.name]: event.target.value }));
	};

	const sendEmail = () => {
	};

	return (<div>
		<form className={classes.root} noValidate autoComplete="off">
			<TextField id="outlined-basic"
				label={t('contact.email')}
				variant="outlined"
				name="email"
				value={values.email}
				onChange={handleChange} />
			<TextField id="outlined-basic"
				label={t('contact.name')}
				variant="outlined"
				name="name"
				value={values.name}
				onChange={handleChange} />
			<TextField id="outlined-basic"
				label={t('contact.subject')}
				variant="outlined"
				name="subject"
				value={values.subject}
				onChange={handleChange} />
			<TextField
				id="filled-multiline-flexible"
				label={t('contact.message')}
				multiline
				rowsMax="4"
				name="message"
				value={values.message}
				onChange={handleChange}
				variant="outlined"
			/>
		</form>
		<div>
			<Button variant="contained" color="primary" onClick={() => sendEmail()}>
				{t('contact.send')}
			</Button>
		</div>
	</div>);
}