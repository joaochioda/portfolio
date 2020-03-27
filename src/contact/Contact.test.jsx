import React from 'react';
import { Contact } from './Contact';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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

	describe('Teste state', () => {

		it('initial state all false', () => {
			wrapper.find('#contact-send').props().onClick();
			expect(setState).toHaveBeenCalledWith({ 'email': false, 'message': false, 'name': false, 'subject': false });
		});

		it('check if state change', () => {
			wrapper.find('#contact-text-email').simulate('change', { target: { value: 'joao@dextra.com' } });
			expect(setState).toHaveBeenCalledWith('joao@dextra.com');
			wrapper.find('#contact-send').props().onClick();
			wrapper.update();
		});

		//snapshot
	});
});