import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from './withAuth';
import { saveComment, fetchComments } from '../actions';

class CommentBox extends Component {
	state = {
		comment: '',
	};

	handlerChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handlerSubmit = event => {
		this.props.onAddComment(this.state.comment);
		this.setState({
			comment: '',
		});
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handlerSubmit}>
					<h4>Add a Comment</h4>
					<textarea name="comment" value={this.state.comment} onChange={this.handlerChange} />
					<div>
						<button type="submit" id="btn">
							Submit Comment
						</button>
					</div>
				</form>
				<button className="fetch-comments" onClick={this.props.onFetchComments}>
					Fetch Comment
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = {
	onAddComment: comment => saveComment(comment),
	onFetchComments: fetchComments,
};

const enhancer = compose(
	withAuth,
	connect(
		null,
		mapDispatchToProps
	)
);

export default enhancer(CommentBox);
