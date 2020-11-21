import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import { CarouselDiv } from './ProjectsCss';
import ModalProjects from './ModalProjects';

import './index.css';

const { Carousel } = require('react-responsive-carousel');

const myProjects = [
  {
    title: 'Super Calculadora',
    description: 'Projeto desenvolvido no bootcamp da IGTI. O objetivo era desenvolver uma super calculadora utlizando apenas HTML e JavaScript.',
    tecnologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Filtro de pessoas',
    description: 'Projeto desenvolvido no bootcamp da IGTI. O objetivo era desenvolver um filtro de pessoas com as informações vindas de um backend.',
    tecnologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Mini Twitter',
    description: 'Projeto desenvolvido no bootcamp da IGTI. O objetivo era criar um CRUD do twitter e salvar em um banco local.',
    tecnologies: ['React', 'CSS'],
  },
  {
    title: 'Mini Instagram',
    description: 'Projeto desenvolvido no bootcamp da IGTI. Dado um conjunto de dados vindo de um banco local, ser possível visualizar os posts da pessoa selecionada.',
    tecnologies: ['React', 'CSS'],
  },
  {
    title: 'FogZone',
    description: 'Projeto desenvolvido como modelo de negócios para o TCC. Ao logar com sua conta do google, o usuário pode favoritar essencias, buscar por informações e até fazer comentários pertinentes.',
    tecnologies: ['Spring', 'Flutter'],
  },
  {
    title: 'Cadastro de aulas',
    description: 'Projeto desenvolvido no bootcamp da Rocketseat. Este projeto tem como objetivo axuliar os professores a cadastrarem suas aulas e os preços de cada uma. Toda interação no front esta integrado com o backend feito em Node e o banco usado foi o postgres',
    tecnologies: ['React', 'Node', 'CSS', 'Postgres'],
  },
  {
    title: 'Cadastro de orfanatos',
    description: 'Projeto desenvolvido no bootcamp da Rocketseat. Este projeto tem como objetivo cadastrar orfanatos utilizando api de maps, salvar as imagens e as informações em um banco de dados postgres. Para o backend foi utilizado Node',
    tecnologies: ['React', 'Node', 'CSS', 'Postgres'],
  },
  {
    title: 'Treinando Css',
    description: 'Projeto pessoal para treinar css. A cada dia é feito um mini projetinho.',
    tecnologies: ['HTML', 'CSS'],
  },
];

export const Projects = () => {
  const [open, setOpen] = React.useState(-1);

  const handleOpen = (index) => {
    setOpen(index);
  };

  const handleClose = () => {
    setOpen(-1);
  };

  return (
    <div id="projects">
      {open !== -1
      && <ModalProjects open={open} handleClose={handleClose} myProjects={myProjects} /> }
      <CarouselDiv className="carousel-style">
        <div className="info-icon">
          <Tooltip title={<p style={{ fontSize: '12px' }}>Clique nas imagens para entender melhor cada projeto</p>} placement="left-start" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
            <InfoOutlinedIcon fontSize="large" />
          </Tooltip>
        </div>
        <Carousel showArrows>
          <div className="carrousel-items" role="button" tabIndex={0} onClick={() => handleOpen(0)}>
            <img alt="" src="https://user-images.githubusercontent.com/47106171/93672386-d7b5df80-fa80-11ea-99ff-5630ae111400.gif" />
            <p className="legend">Super calculadora - Bootcamp</p>
          </div>
          <div className="carrousel-items" role="button" tabIndex={0} onClick={() => handleOpen(1)}>
            <img alt="" src="https://user-images.githubusercontent.com/47106171/94351450-f68f1580-002e-11eb-910a-b34a44086001.gif" />
            <p className="legend">Filtro de pessoas - Bootcamp</p>
          </div>
          <div className="carrousel-items" role="button" tabIndex={0} onClick={() => handleOpen(2)}>
            <img alt="" src="https://user-images.githubusercontent.com/47106171/97115475-b70f2400-16d5-11eb-9386-729de754c5d5.gif" />
            <p className="legend">Mini Twitter - Bootcamp</p>
          </div>
          <div className="carrousel-items" role="button" tabIndex={0} onClick={() => handleOpen(3)}>
            <img alt="" src=" https://user-images.githubusercontent.com/47106171/99158436-8b1e0780-26b1-11eb-9802-8d26356a2f07.gif" />
            <p className="legend">Mini instagram - Bootcamp</p>
          </div>
          <div className="carrousel-items" role="button" tabIndex={0} onClick={() => handleOpen(4)}>
            <img alt="" src="https://user-images.githubusercontent.com/47106171/94488292-bf4c7000-01b8-11eb-9471-bb0a252c8469.PNG" />
            <p className="legend">Projeto flutter</p>
          </div>

          <div className="carrousel-items" role="button" tabIndex={0} onClick={() => handleOpen(5)}>
            <img alt="" src="https://user-images.githubusercontent.com/47106171/94367802-487b7e00-00b7-11eb-8da9-7af176d17d3d.gif" />
            <p className="legend">Cadastro de aulas - Bootcamp</p>
          </div>

          <div className="carrousel-items" role="button" tabIndex={0} onClick={() => handleOpen(6)}>
            <img alt="" src="https://user-images.githubusercontent.com/47106171/99466472-3bdb0f80-291b-11eb-9353-96a5c22b6fdd.gif" />
            <p className="legend">Cadastro de orfanatos - Bootcamp</p>
          </div>

          <div className="carrousel-items" role="button" tabIndex={0} onClick={() => handleOpen(7)}>
            <img alt="" src="https://user-images.githubusercontent.com/47106171/99467951-34693580-291e-11eb-9528-410ff77f33f9.gif" />
            <p className="legend">Treinando Css</p>
          </div>
        </Carousel>
      </CarouselDiv>
    </div>
  );
};
