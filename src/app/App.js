import React from 'react';
import logo from '../logo.svg';
import { withNamespaces } from 'react-i18next';
import './App.css';
import i18n from '../i18n';

function App({ t }) {
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="App">
			<header className="App-header">
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

export default withNamespaces()(App);
