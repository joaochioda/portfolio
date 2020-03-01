import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';

export default function App() {
	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="App">
			<Header />
			<div>
				<button onClick={() => changeLanguage('pt')}>pt</button>
				<button onClick={() => changeLanguage('en')}>en</button>
			</div>

			<Main/>
		</div>
	);
}

