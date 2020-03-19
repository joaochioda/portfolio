import React from 'react';
import { mount } from 'enzyme';
import { Contact } from './Contact';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Renders Contact', () => {
	it('renders', () => {
		mount(<Contact />);
	});

	it('displays 4 text field and a button', () => {
		const wrapper = mount(<Contact />);

		expect(wrapper.find(TextField)).toHaveLength(4);
		expect(wrapper.find(Button)).toHaveLength(1);

	});

});