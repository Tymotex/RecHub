import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';


import './App.scss';
import { Home, Register, Login, Games, Game, Error404 } from '../../pages';

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
				<Route path="/ass" component={Game} />
				{/* <Redirect from="/genres" to="/games" /> */}
				<Route component={Error404} />
			</Switch>
		</HashRouter>
	);
};

export default App;
