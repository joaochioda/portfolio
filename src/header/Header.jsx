import React from 'react';
import { Headers, Li, Ul } from '../components/Header';
import { useTranslation } from 'react-i18next';

export default function Header() {
	const { t } = useTranslation();
	return (
		<Headers>
			<Ul>
				<Li>{t('header.whoami')}</Li>
				<Li>{t('header.projects')}</Li>
				<Li>{t('header.contact')}</Li>
			</Ul>

		</Headers>
	);
}