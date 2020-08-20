import React from 'react';
import { Nav, Label, Div40, Div30, Div30Justify, Flag } from '../components/HeaderCss';
import { useTranslation } from 'react-i18next';
import Brasil from '../resources/brasil.jpg';
import Eua from '../resources/eua.jpg';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './index.css';

export default function Header() {
	const [flag, setFlag] = React.useState('Brasil');
	const { t } = useTranslation();

	const { i18n } = useTranslation();
	const changeLanguage = (lng) => {
		console.log(lng);
		if(lng === 'pt') {
			setFlag('Brasil');
		} else {
			setFlag('Eua');
		}
		i18n.changeLanguage(lng);
	};
	

	const renderFlag = (flag === 'Brasil' ? <img src={Eua} width="36" height="24" onClick={() => changeLanguage('en')}/> : <img src={Brasil} width="36" height="24" onClick={() => changeLanguage('pt')}/>);
	return (
		<div>
			
			<Nav>
				<Div30>
					<Label>
						<Link style={{textDecoration: 'none'}} activeClass="active" to="whoiam" spy={true} smooth={true} duration={1000} >{t('header.whoami')}</Link>
					</Label>
					<Label>
						<Link style={{textDecoration: 'none'}} activeClass="active" to="projects" spy={true} smooth={true} duration={1000} >{t('header.projects')}</Link>
					</Label>
					<Label>
						<Link style={{textDecoration: 'none'}} activeClass="active" to="contact" spy={true} smooth={true} duration={1000} >{t('header.contact')}</Link>
					</Label>
				</Div30>
				<Div40>
					<div className="hexagon image"></div>
				</Div40>
				<Div30Justify>
					<Flag>
						{renderFlag}
					</Flag>
				</Div30Justify>
			</Nav>
		</div>
	);
}