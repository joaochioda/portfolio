/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Div, TopText, Card, Title, Description, Content, Image, RightCard } from '../components/MainCss';
import ReactDOM from 'react-dom';
import { Contact } from '../contact/Contact.jsx';
import { Projects } from '../projects/Projects.jsx';
import { useTranslation } from 'react-i18next';
import Graduate from '../resources/graduate.png';
import Boss from '../resources/boss.svg';
import Controller from '../resources/controller.png';
import '../components/main.css';

export default function BackGround() {

	const { t } = useTranslation();
	const offset = window.innerWidth* 3 / 8;
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

	for (let item of leftCards) {
		if (scrollPosition > item.offsetTop - offset && item.className.indexOf(' anime-start') === -1) {
			const a = item.className + ' anime-start';
			item.className = a;
		} else if (item.className.indexOf(' anime-start') !== -1 && scrollPosition < item.offsetTop - offset){
			item.className = item.className.substring(0, item.className.indexOf(' anime-start'));
		}
	}

	for (let item of rightCards) {
		if (scrollPosition > item.offsetTop - offset && item.className.indexOf(' anime-start') === -1) {
			const a = item.className + ' anime-start';
			item.className = a;
		} else if (item.className.indexOf(' anime-start') !== -1 && scrollPosition < item.offsetTop - offset){
			item.className = item.className.substring(0, item.className.indexOf(' anime-start'));
		}
	}

	function animeScroll() {
		let $leftCard = $('.anime-left');
		let $rightCard = $('.anime-right');
		let animationClass = 'anime-start';
		let offset = $(window).height() * 3 / 6;
		let documentTop = $(document).scrollTop();
		$leftCard.each(function () {
			let itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});

		$rightCard.each(function () {
			let itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}


	return (
		<div id="whoiam">

			<TopText>
				{t('main.scroll')}
			</TopText>

			<Card className="anime-left">
				<Content>
					<Title>
						Formação
					</Title>
					<Description>
						Formado em 2019 na faculdade de Campinas (Facamp), no curso de engenharia da Computação
					</Description>

				</Content>
				<Image>
					<img src={Graduate} width="250" height="200" />
				</Image>
			</Card>

			<RightCard className="anime-right">
				<Image>
					<img src={Boss} width="250" height="200" />
				</Image>
				<Content>
					<Title>
						Experiência Profissional
					</Title>
					<Description>
						2019 - 2020 Estagiário na Dextra
						<br />2020 - Presente Desenvolvedor Júnior Dextra
					</Description>
				</Content>
			</RightCard>

			<Card className="anime-left">
				<Content>
					<Title>
						Hobbie
					</Title>
					<Description>
						No tempo livre gosto de jogar (LOL), assistir séries, e programar óbvio.
					</Description>

				</Content>
				<Image>
					<img src={Controller} width="250" height="200" />
				</Image>
			</Card>

			<Div>
				<Projects />
			</Div>
			<Div>
				<Contact />
			</Div>
		</div>
	);

}