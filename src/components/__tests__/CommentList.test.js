import React from 'react';
import CommentList from 'components/CommentList';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Root from 'Root';

describe('<CommentList />', () => {
	let wrapper = null;

	beforeEach(() => {
		const initialState = {
			comments: ['Comment 1', 'Comment 2'],
		};

		wrapper = mount(
			<Root initialState={initialState}>
				<CommentList />
			</Root>
		);
	});

	it('create on LI', () => {
		expect(wrapper.find('li')).to.have.length(2);
	});

	it('shows the text for each comment', () => {
		expect(wrapper.render().text()).to.contain('Comment 1');
		expect(wrapper.render().text()).to.contain('Comment 2');
	});
});
