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
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import ViewCarousel from '@material-ui/icons/ViewCarousel';
import MailIcon from '@material-ui/icons/Mail';
import Brasil from '../../resources/brasil.jpg';
import Eua from '../../resources/eua.jpg';
import {
  Nav, Label, Div40, Div30, Div30Justify, Flag, DivIconButton,
} from './HeaderCss';

import './index.css';

export default function Header() {
  const [flag, setFlag] = React.useState('Brasil');
  const [openSideMenu, setOpenSideMenu] = React.useState(false);
  const buttonsSideMenu = [{ icon: 'EmojiPeople', text: 'WhoAmI' }, { icon: 'ViewCarousel', text: 'Projects' }, { icon: 'MailIcon', text: 'Contact' }];
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

  const renderIcons = (icon) => {
    if (icon === 'EmojiPeople') {
      return <EmojiPeople />;
    }
    if (icon === 'ViewCarousel') {
      return <ViewCarousel />;
    }
    if (icon === 'MailIcon') {
      return <MailIcon />;
    }
  };

  const renderFlag = (flag === 'Brasil' ? <img src={Eua} width="36" height="24" alt="" /> : <img src={Brasil} alt="" width="36" height="24" onClick={() => changeLanguage('pt')} />);
  return (
    <div>
      <Nav>
        {window.innerWidth > 768 ? (
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
        ) : (
          <DivIconButton onClick={() => setOpenSideMenu(true)}>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
            >
              <MoreVertIcon />
            </IconButton>
          </DivIconButton>
        )}
        <Div40>
          <div className="hexagon image" />
        </Div40>
        <Div30Justify>
          <Flag>
            {renderFlag}
          </Flag>
        </Div30Justify>
      </Nav>
      <SwipeableDrawer

        onOpen={() => console.log('oi')}
        open={openSideMenu}
        onClose={() => { console.log('oi'); setOpenSideMenu(false); }}
      >
        <List>
          {buttonsSideMenu.map((icon, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{renderIcons(icon.icon)}</ListItemIcon>
              <ListItemText primary={icon.text} />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </div>
  );
}
