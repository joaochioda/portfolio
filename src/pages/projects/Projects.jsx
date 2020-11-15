import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { CarouselDiv } from './ProjectsCss';

import './index.css';

const { Carousel } = require('react-responsive-carousel');

function getModalStyle() {
  return {
    top: '25%',
    left: '25%',
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 'calc(100% / 2)',
    backgroundColor: 'rgba(160, 196, 255, 1)',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const Projects = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="projects">
      <p>Click to get the full Modal experience!</p>
      <button type="button">
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
      <CarouselDiv className="teste">
        <Carousel showArrows>
          <div className="bla" onClick={handleOpen} role="button" tabIndex={0}>
            <img alt="" src="https://user-images.githubusercontent.com/47106171/93672386-d7b5df80-fa80-11ea-99ff-5630ae111400.gif" />
            <p className="legend">Super calculadora (html + css)</p>
          </div>
          <div className="bla">
            <img alt="" src="https://user-images.githubusercontent.com/47106171/94351450-f68f1580-002e-11eb-910a-b34a44086001.gif" />
            <p className="legend">Filtro de pessoas (html + css)</p>
          </div>

          <div className="bla">
            <img alt="" src="https://user-images.githubusercontent.com/47106171/94488292-bf4c7000-01b8-11eb-9471-bb0a252c8469.PNG" />
            <p className="legend">Projeto flutter</p>
          </div>

          <div className="bla">
            <img alt="" src="https://user-images.githubusercontent.com/47106171/94367802-487b7e00-00b7-11eb-8da9-7af176d17d3d.gif" />
            <p className="legend">Bootcamp react</p>
          </div>

          <div className="bla">
            <img alt="" src="https://user-images.githubusercontent.com/47106171/93395726-cab0aa80-f84c-11ea-8ff4-78b7e3823f53.gif" />
            <p className="legend">Treinando css 1</p>
          </div>

          <div className="bla">
            <img alt="" src="https://user-images.githubusercontent.com/47106171/92765673-ef4be480-f36b-11ea-9e4d-d09118998c13.gif" />
            <p className="legend">Treinando css 2</p>
          </div>
        </Carousel>
      </CarouselDiv>
    </div>
  );
};
