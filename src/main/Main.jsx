import React from 'react';
import { Div, TopText, Card, Title, Description, Content, Image, RightCard } from '../components/MainCss';
import { Contact } from '../contact/Contact.jsx';
import { useTranslation } from 'react-i18next';
import Graduate from '../resources/graduate.png';
import Boss from '../resources/boss.svg';
export default function BackGround() {
	const { t } = useTranslation();
	return (
		<div>

			<TopText>
				{t('main.scroll')}
			</TopText>

			<Card>
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

			<RightCard>
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


			<Div>
				dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas dasdsadas
			</Div>
			<Div>
				<Contact />
			</Div>
		</div>
	);

}