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

export default function ProjectCard({
  title, description, tecnologies, src,
}) {
  return (
    <div className="card">
      <div className="face front">
        <div className="content">
          <h3>{title}</h3>
          <h4>{description}</h4>
          <div className="chips">
            {tecnologies.map((tecnologie) => renderChips(tecnologie))}
          </div>
        </div>
      </div>
      <div className="face back">
        <img src={src} width="90%" height="90%" alt={title} />
      </div>

    </div>
  );
}
