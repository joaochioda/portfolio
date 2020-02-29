import React from 'react';
import { Div, Li, Ul } from '../components/HeaderCss';
import { useTranslation } from 'react-i18next';

export default function Header() {
	const { t } = useTranslation();
	return (
		<Div>
			<Ul>
				<Li>{t('header.whoami')}</Li>
				<Li>{t('header.projects')}</Li>
				<Li>{t('header.contact')}</Li>
			</Ul>
		</Div>
	);
}