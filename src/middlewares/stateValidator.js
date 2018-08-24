import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
	next(action);

	const newState = getState();
	const isValid = tv4.validate(newState, stateSchema);
	if (!isValid) {
		const warn = tv4.validateResult(newState, stateSchema);
		console.warn('Invalid state schema detacted', warn.error.message);
	}
};
