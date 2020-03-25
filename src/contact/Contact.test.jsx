import React from 'react';
import { mount } from 'enzyme';
import { Contact } from './Contact';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

Enzyme.configure({ adapter: new Adapter() });


describe('<Test Contact>', () => {
	let wrapper;
	const setState = jest.fn();
	const useStateSpy = jest.spyOn(React, 'useState');
	useStateSpy.mockImplementation((init) => [init, setState]);

	beforeEach(() => {
		wrapper = Enzyme.shallow(<Contact />);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('See state', () => {
		it('teste 1', () => {
			wrapper.find('#count-up').props().onClick();
			expect(setState).toHaveBeenCalledWith({'email': false, 'message': false, 'name': false, 'subject': false});
		});
	});
});