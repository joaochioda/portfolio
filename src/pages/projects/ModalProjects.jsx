/* eslint-disable react/prop-types */
import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {
  ChipJs, ChipHtml, ChipCss, ChipReact, ChipFlutter, ChipSpring, ChipNode, ChipPostgres,
} from './ProjectsCss';

import js from '../../resources/js.png';
import html from '../../resources/html.jpeg';
import react from '../../resources/react.png';
import css from '../../resources/css.png';
import flutter from '../../resources/flutter.png';
import spring from '../../resources/spring.png';
import node from '../../resources/node.png';
import postgres from '../../resources/postgres.png';

function getModalStyle() {
  if (window.innerWidth > 768) {
    return {
      top: '25%',
      left: '25%',
    };
  }
  return {
    top: '25%',
    left: '15%',
  };
}

const renderChips = (type) => {
  if (type === 'JavaScript') {
    return (
      <ChipJs
        variant="outlined"
        size="medium"
        avatar={<Avatar src={js} />}
        label="JavaScript"
      />
    );
  } if (type === 'HTML') {
    return (
      <ChipHtml
        variant="outlined"
        size="medium"
        avatar={<Avatar src={html} />}
        label="HTML"
      />
    );
  } if (type === 'React') {
    return (
      <ChipReact
        variant="outlined"
        size="medium"
        avatar={<Avatar src={react} />}
        label="React"
      />
    );
  }
  if (type === 'ReactNative') {
    return (
      <ChipReact
        variant="outlined"
        size="medium"
        avatar={<Avatar src={react} />}
        label="React Native"
      />
    );
  } if (type === 'CSS') {
    return (
      <ChipCss
        variant="outlined"
        size="medium"
        avatar={<Avatar src={css} />}
        label="CSS"
      />
    );
  }
  if (type === 'Spring') {
    return (
      <ChipSpring
        variant="outlined"
        size="medium"
        avatar={<Avatar src={spring} />}
        label="Spring"
      />
    );
  }
  if (type === 'Flutter') {
    return (
      <ChipFlutter
        variant="outlined"
        size="medium"
        avatar={<Avatar src={flutter} />}
        label="Flutter"
      />
    );
  }
  if (type === 'Node') {
    return (
      <ChipNode
        variant="outlined"
        size="medium"
        avatar={<Avatar src={node} />}
        label="Node"
      />
    );
  }
  if (type === 'Postgres') {
    return (
      <ChipPostgres
        variant="outlined"
        size="medium"
        avatar={<Avatar src={postgres} />}
        label="Postgres"
      />
    );
  }
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 'calc(100% / 2)',
    backgroundColor: 'rgba(105, 105, 105, 0.9)',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: 'yellow',
  },
}));

function ModalProjects({ open, handleClose, myProjects }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{myProjects[open].title}</h2>
          <p id="simple-modal-description">
            {myProjects[open].description}
          </p>
          <footer style={{ marginBottom: '10px' }}>Tecnologias</footer>
          {myProjects[open].tecnologies.map((tecnologie) => renderChips(tecnologie))}

        </div>
      </Modal>
    </div>
  );
}

export default ModalProjects;
