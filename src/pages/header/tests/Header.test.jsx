import React from 'react';
import Header from '../Header';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({adapter: new Adapter()});

describe('<Header />', () => {
	it('renders a Header`', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper).toMatchSnapshot();
	});
});