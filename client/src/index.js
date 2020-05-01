import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import store from './store';

const render = () => ReactDOM.render(
	<App store={store}/>,
	document.getElementById('root')
);

// Now when actions are dispatched, the render function will be called
store.subscribe(render);
render();


// More about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
