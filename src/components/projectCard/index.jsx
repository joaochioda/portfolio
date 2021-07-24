/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';
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

const renderChips = (type, index) => {
  if (type === 'JavaScript') {
    return (
      <ChipJs
        key={index}
        variant="outlined"
        size="medium"
        avatar={<Avatar src={js} />}
        label="JavaScript"
      />
    );
  } if (type === 'HTML') {
    return (
      <ChipHtml
        key={index}
        variant="outlined"
        size="medium"
        avatar={<Avatar src={html} />}
        label="HTML"
      />
    );
  } if (type === 'React') {
    return (
      <ChipReact
        key={index}
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
        key={index}
        variant="outlined"
        size="medium"
        avatar={<Avatar src={react} />}
        label="React Native"
      />
    );
  } if (type === 'Next') {
    return (
      <ChipReact
        key={index}
        variant="outlined"
        size="medium"
        avatar={<Avatar src={react} />}
        label="Next"
      />
    );
  } if (type === 'CSS') {
    return (
      <ChipCss
        key={index}
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
        key={index}
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
        key={index}
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
        key={index}
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
        key={index}
        variant="outlined"
        size="medium"
        avatar={<Avatar src={postgres} />}
        label="Postgres"
      />
    );
  }
};

export default function ProjectCard({
  title, description, tecnologies, src, git,
}) {
  const cardDesktop = () => (
    <div className="card">
      <div className="face front">
        <div className="content">
          <h3>{title}</h3>
          <h4>{description}</h4>
          <div className="chips">
            {tecnologies.map((tecnologie, index) => renderChips(tecnologie, index))}
          </div>
        </div>
      </div>
      <div className="face back">
        <img src={src} width="90%" height="80%" alt={title} />
        <a href={git} target="_blank" rel="noopener noreferrer">Acesse o repo aqui</a>
      </div>

    </div>
  );

  const cardMobile = () => (
    <div className="card-mobile">
      <div className="face front">
        <h3>{title}</h3>
        <img src={src} width="100%" height="75%" alt={title} />
      </div>
    </div>
  );
  return (
    window.innerWidth < 720 ? cardMobile() : cardDesktop()
  );
}
