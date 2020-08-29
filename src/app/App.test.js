/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

test('botoes i18 renderizando', () => {
  const { getByText } = render(<App />);
  const buttonPt = getByText('pt');
  const buttonEn = getByText('en');
  expect(buttonPt).toBeInTheDocument();
  expect(buttonEn).toBeInTheDocument();
});
