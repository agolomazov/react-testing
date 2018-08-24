export default ({ dispatch }) => next => action => {
	if (!action.payload || !action.payload.then) {
		console.log('не нужно обрабатывать это действие');
		return next(action);
	}

	action.payload.then(response => {
		console.log('а это нужно');
		const newAction = { ...action, payload: response };
		dispatch(newAction);
	});
};
