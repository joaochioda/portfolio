import React from 'react';
import logo from '../logo.svg';
import { useTranslation } from 'react-i18next';
import './App.css';
import Header from '../header/Header';

export default function App() {
	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	console.log(t);

	return (
		<div className="App">
			<header className="App-header">
				<Header />
				<div>
					<button onClick={() => changeLanguage('pt')}>pt</button>
					<button onClick={() => changeLanguage('en')}>en</button>
				</div>
				<img src={logo} className="App-logo" alt="logo" />
				<h1>{t('Welcome to React')}</h1>
			</header>
		</div>
	);
}

