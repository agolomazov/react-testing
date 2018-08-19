import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('<App />', () => {
	let wrapper = null;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('shows a comment box', () => {
		expect(wrapper.find(CommentBox)).to.have.length(1);
	});

	it('shows as comment list', () => {
		expect(wrapper.find(CommentList)).to.have.length(1);
	});
});
