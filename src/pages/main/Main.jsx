/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Div, TopText, Card, Title, Description, Content, Image, RightCard, SendMeEmail,
} from './MainCss';
import { Contact } from '../contact/Contact.jsx';
import { Projects } from '../projects/Projects.jsx';
import Graduate from '../../resources/graduate.png';
import Boss from '../../resources/boss.svg';
import Controller from '../../resources/controller.png';
import '../../components/main.css';

export default function BackGround() {
  const { t } = useTranslation();
  const offset = window.innerWidth * 5 / 8;
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

      <Card width={window.innerWidth} className="anime-left">
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

      <RightCard width={window.innerWidth} className="anime-right">
        <Title>
          Experiência Profissional
        </Title>

        <Content position="right">
          <Image>
            {renderImage(Boss)}
          </Image>
          <Description>
            2019 - 2020 Estagiário na Dextra
            <br />
            2020 - Presente Desenvolvedor Júnior Dextra
          </Description>
        </Content>
      </RightCard>

      <Card width={window.innerWidth} className="anime-left">
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

      <Div>
        <Projects />
      </Div>
      <Div>
        <SendMeEmail>
          {t('email.message')}
        </SendMeEmail>
        <Contact />
      </Div>
    </div>
  );
}
