/* eslint-disable no-console */
import React from 'react';
import { useTranslation } from 'react-i18next';
import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-scroll';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Brasil from '../../resources/brasil.jpg';
import Eua from '../../resources/eua.jpg';
import Linkedin from '../../resources/linkedin.png';
import Git from '../../resources/git1.png';
import {
  Nav, Label, Div40, Div30, Div30Justify, Flag, DivIconButton, Icon,
} from './HeaderCss';

import './index.css';

export default function Header() {
  const [flag, setFlag] = React.useState('Brasil');
  const [openSideMenu, setOpenSideMenu] = React.useState(false);
  const buttonsSideMenu = [{ icon: 'Linkedin', text: 'Linkedin', url: 'https://www.linkedin.com/in/joaoguilherme38/' }, { icon: 'GitHub', text: 'GitHub', url: 'https://github.com/joaochioda' }];
  const { t } = useTranslation();

  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    if (lng === 'pt') {
      setFlag('Brasil');
    } else {
      setFlag('Eua');
    }
    i18n.changeLanguage(lng);
  };

  let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      document.getElementById('jao38').style.top = '0';
    } else {
      document.getElementById('jao38').style.top = '-120px';
    }

    prevScrollPos = currentScrollPos;
  };
  const renderIcons = (icon) => {
    if (icon === 'Linkedin') {
      return <img src={Linkedin} width="34" height="34" alt="" />;
    }
    if (icon === 'GitHub') {
      return <img src={Git} width="34" height="34" alt="" />;
    }
  };

  const brazilFlag = (flag === 'Brasil' ? <img src={Brasil} alt="" width="46" height="33" /> : <img src={Eua} width="46" height="33" alt="" />);
  const euaFlag = (flag === 'Brasil' ? <img src={Eua} width="46" height="33" alt="" /> : <img src={Brasil} alt="" width="46" height="33" />);
  return (
    <div>
      <Nav id="jao38">

        <Div30>
          <Label>
            <Link style={{ textDecoration: 'none' }} activeClass="active" to="whoiam" spy smooth duration={1000}>{t('header.whoami')}</Link>
          </Label>
          <Label>
            <Link style={{ textDecoration: 'none' }} activeClass="active" to="projects" spy smooth duration={1000}>{t('header.projects')}</Link>
          </Label>
          <Label>
            <Link style={{ textDecoration: 'none' }} activeClass="active" to="contact" spy smooth duration={1000}>{t('header.contact')}</Link>
          </Label>
        </Div30>

        <DivIconButton onClick={() => setOpenSideMenu(true)}>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
          >
            <MoreVertIcon htmlColor="white" />
          </IconButton>
        </DivIconButton>

        <Div40>
          <div className="hexagon image" />
        </Div40>
        <Div30Justify>
          <Flag>
            <div className="maincontainer" onClick={() => (flag === 'Brasil' ? changeLanguage('en') : changeLanguage('pt'))} role="button" tabIndex={0}>
              <div className="card">
                <div className="face front">
                  {brazilFlag}
                </div>
                <div className="face back">
                  {euaFlag}
                </div>

              </div>
            </div>
            <div className="mobile" onClick={() => (flag === 'Brasil' ? changeLanguage('en') : changeLanguage('pt'))} role="button" tabIndex={0}>
              {brazilFlag}
            </div>
          </Flag>

          <Icon white>
            <a href="https://www.linkedin.com/in/joaoguilherme38/" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} width="34" height="34" alt="" />
            </a>
          </Icon>

          <Icon white>
            <a href="https://github.com/joaochioda" target="_blank" rel="noopener noreferrer">

              <img src={Git} width="34" height="34" alt="" />
            </a>

          </Icon>

        </Div30Justify>
      </Nav>
      <SwipeableDrawer
        className="header-swip"
        onOpen={() => console.log('oi')}
        open={openSideMenu}
        onClose={() => { console.log('oi'); setOpenSideMenu(false); }}
      >
        <List>
          {buttonsSideMenu.map((icon, index) => (
            <ListItem className="header-list-item" button key={index}>
              <a href={icon.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', textDecoration: 'none', color: 'black' }}>
                <ListItemIcon>{renderIcons(icon.icon)}</ListItemIcon>
                <ListItemText primary={icon.text} />
              </a>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </div>
  );
}
