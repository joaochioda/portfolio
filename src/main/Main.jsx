/* eslint-disable no-undef */
import React from 'react';
import { Div, TopText, Card, Title, Description, Content, Image, RightCard } from '../components/MainCss';
import { Contact } from '../contact/Contact.jsx';
import { useTranslation } from 'react-i18next';
import Graduate from '../resources/graduate.png';
import Boss from '../resources/boss.svg';
import Controller from '../resources/controller.png';
import '../components/main.css';
import debounce from 'lodash.debounce';

export default function BackGround() {

	const { t } = useTranslation();


	function animeScroll() {
		let $leftCard = $('.anime-left');
		let $rightCard = $('.anime-right');
		let animationClass = 'anime-start';
		let offset = $(window).height() * 3/6;
		console.log(offset);
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

	$(document).scroll(function () {
		animeScroll();
	});

	return (
		<div>

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
				dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas
			</Div>
			<Div>
				<Contact />
			</Div>
		</div>
	);

}