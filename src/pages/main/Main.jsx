/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Div, TopText, Card, Title, Description, Content, Image, RightCard, SendMeEmail, ProjectContainer,
} from './MainCss';
import { Contact } from '../contact/Contact.jsx';
import Graduate from '../../resources/graduate.png';
import Boss from '../../resources/boss.svg';
import Controller from '../../resources/controller.png';
import ProjectCard from '../../components/projectCard';
import '../../components/main.css';
import { myProjects } from './projects';

export default function BackGround() {
  const { t } = useTranslation();
  let offset;
  if (window.innerWidth > 900) {
    offset = window.innerWidth * 3 / 8;
  } else {
    offset = window.innerWidth * 5 / 8;
  }
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };
  const leftCards = document.getElementsByClassName('anime-left');
  const rightCards = document.getElementsByClassName('anime-right');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  for (const item of leftCards) {
    if (scrollPosition > item.offsetTop - offset && item.className.indexOf(' anime-start') === -1) {
      const a = `${item.className} anime-start`;
      item.className = a;
    } else if (item.className.indexOf(' anime-start') !== -1 && scrollPosition < item.offsetTop - offset) {
      item.className = item.className.substring(0, item.className.indexOf(' anime-start'));
    }
  }

  for (const item of rightCards) {
    if (scrollPosition > item.offsetTop - offset && item.className.indexOf(' anime-start') === -1) {
      const a = `${item.className} anime-start`;
      item.className = a;
    } else if (item.className.indexOf(' anime-start') !== -1 && scrollPosition < item.offsetTop - offset) {
      item.className = item.className.substring(0, item.className.indexOf(' anime-start'));
    }
  }

  const renderImage = (image) => (
    <img src={image} width={window.innerWidth > 750 ? '250' : 150} height={window.innerWidth > 750 ? '250' : 150} alt="" />
  );
  return (
    <div id="whoiam">

      <TopText>
        {t('main.scroll')}
      </TopText>

      <Card className="anime-left">
        <Title>
          Formação
        </Title>
        <Content>
          <Image>
            {renderImage(Graduate)}
          </Image>
          <Description>
            Formado em 2019 na faculdade de Campinas (Facamp), no curso de engenharia da Computação
          </Description>

        </Content>

      </Card>

      <RightCard className="anime-right">
        <Title>
          Experiência Profissional
        </Title>

        <Content position="right">
          <Image>
            {renderImage(Boss)}
          </Image>
          <Description>
            (2019 - 2020) Estagiário na Dextra
            <br />
            (2020 - 2021) Desenvolvedor Júnior Dextra
            <br />
            (2021 - Presente) Desenvolvedor Pleno Corebiz
          </Description>
        </Content>
      </RightCard>

      <Card className="anime-left">
        <Title>
          Hobbie
        </Title>
        <Content>
          <Image>
            {renderImage(Controller)}
          </Image>
          <Description>
            No tempo livre gosto de jogar jogos eletrônicos 💻,
            assistir séries 📺, e brincar com programação ❤.
          </Description>

        </Content>

      </Card>

      <div id="projects">
        <div className="projetos-title">
          Projetos
        </div>
        <ProjectContainer>
          {myProjects.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              tecnologies={project.tecnologies}
              src={project.src}
            />
          ))}
        </ProjectContainer>
      </div>

      <Div>
        <SendMeEmail>
          {t('email.message')}
        </SendMeEmail>
        <Contact />
      </Div>
    </div>
  );
}
