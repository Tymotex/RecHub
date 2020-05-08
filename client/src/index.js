import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';

const render = () => ReactDOM.render(
	// The provider adds the Redux store to the context
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// Now when actions are dispatched, the render function will be called
store.subscribe(render);
render();
