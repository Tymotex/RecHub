import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// Components and pages:

// import { SideNav } from '../side-nav';
import { Home, Register, Login, Games, Error404 } from '../../pages';

// Importing roboto immediately applies the style to the whole project
import 'typeface-roboto';  

const App = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/games" component={Games} />
				<Redirect from="/genres" to="/games" />
				<Route component={Error404} />
			</Switch>
		</HashRouter>
	);
};

export default App;
