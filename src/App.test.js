import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText('Oi, meu nome é Jão38');
	expect(linkElement).toBeInTheDocument();
});
