import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('texto principal', () => {

	const { getByText } = render(<App />);
	const linkElement = getByText('Welcome to my app');
	expect(linkElement).toBeInTheDocument();
});
