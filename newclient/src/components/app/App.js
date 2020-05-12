import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Components and pages:
import { TopNav } from '../top-nav';
import { Home, Register, Login, Error404 } from '../../pages';

// Importing roboto immediately applies the style to the whole project
import 'typeface-roboto';  

const App = () => {
	return (
		<HashRouter>
			<TopNav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route component={Error404} />
			</Switch>
		</HashRouter>
	);
};

export default App;
