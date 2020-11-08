import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselDiv } from './ProjectsCss';

import './index.css';

const { Carousel } = require('react-responsive-carousel');

export const Projects = () => (
  <div id="projects">
    <CarouselDiv className="teste">
      <Carousel showArrows>
        <div className="bla">
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
