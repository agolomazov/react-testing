import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Root from '../../Root';
import CommentBox from '../CommentBox';

describe('<CommentBox />', () => {
	let wrapper = null;

	beforeEach(() => {
		wrapper = mount(
			<Root>
				<CommentBox />
			</Root>
		);
		wrapper.find('textarea').simulate('change', {
			target: {
				value: 'new text',
				name: 'comment',
			},
		});
		wrapper.update();
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it('has a text area and two button', () => {
		expect(wrapper.find('textarea')).to.have.length(1);
		expect(wrapper.find('button')).to.have.length(2);
	});

	it('has a texarea that uses can type in', () => {
		expect(wrapper.find('textarea').prop('value')).to.equal('new text');
	});

	it('when form is submitted, textarea gets emptied', () => {
		wrapper.find('form').simulate('submit');
		wrapper.update();
		expect(wrapper.find('textarea').prop('value')).to.equal('');
	});
});
