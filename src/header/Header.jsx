import React from 'react';
import { Div, Ul, HeaderPc, HeaderMobile, Li, Nav } from '../components/HeaderCss';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Header() {
	const { t } = useTranslation();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>

			<Nav>
				<HeaderPc>
					<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="primary">
						{t('header.menu')}
					</Button>
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					><MenuItem onClick={handleClose}>{t('header.whoami')}</MenuItem>
						<MenuItem onClick={handleClose}>{t('header.projects')}</MenuItem>
						<MenuItem onClick={handleClose}>{t('header.contact')}</MenuItem>
					</Menu>
				</HeaderPc>
				<HeaderMobile>
					<Div>
						<Ul>
							<Li>{t('header.whoami')}</Li>
							<Li>{t('header.projects')}</Li>
							<Li>{t('header.contact')}</Li>
						</Ul>
					</Div>
				</HeaderMobile>


			</Nav>
		</div>

	);
}