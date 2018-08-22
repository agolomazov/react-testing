import React, { Component } from 'react';
import { connect } from 'react-redux';

export default WrappedComponent => {
	class WithAuthComponent extends Component {
		componentDidMount() {
			this.shouldNavigateAway();
		}

		componentDidUpdate() {
			this.shouldNavigateAway();
		}

		shouldNavigateAway() {
			if (!this.props.auth) {
				this.props.history.replace('/');
			}
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	const mapStateToProps = state => ({
		auth: state.auth,
	});

	return connect(mapStateToProps)(WithAuthComponent);
};
