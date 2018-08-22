import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Root from './Root';
import App from './components/App';

ReactDOM.render(
	<Root>
		<BrowserRouter>
			<Switch>
				<Route path="/" component={App} />
			</Switch>
		</BrowserRouter>
	</Root>,
	document.getElementById('root')
);
