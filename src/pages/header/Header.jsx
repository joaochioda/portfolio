import React from 'react';
import { Nav, Label, Div40, Div30, Div30Justify, Flag, DivIconButton } from './HeaderCss';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import Brasil from '../../resources/brasil.jpg';
import Eua from '../../resources/eua.jpg';
import { Link } from 'react-scroll';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './index.css';

export default function Header() {
	const [flag, setFlag] = React.useState('Brasil');
	const { t } = useTranslation();

	const { i18n } = useTranslation();
	const changeLanguage = (lng) => {
		if(lng === 'pt') {
			setFlag('Brasil');
		} else {
			setFlag('Eua');
		}
		i18n.changeLanguage(lng);
	};
	

	const renderFlag = (flag === 'Brasil' ? <img src={Eua} width="36" height="24" alt="" onClick={() => changeLanguage('en')}/> : <img src={Brasil} alt="" width="36" height="24" onClick={() => changeLanguage('pt')}/>);
	return (
		<div>		
			<Nav>
				{window.innerWidth > 768 ? (
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
					</Div30>)
					: (<DivIconButton>
						<IconButton  aria-label="more"
							aria-controls="long-menu"
							aria-haspopup="true" >
							<MoreVertIcon />
						</IconButton> 
					</DivIconButton>)}
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