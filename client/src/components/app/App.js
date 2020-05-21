import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.scss';
import { Home, Register, Login, Games, Game, Error404 } from '../../pages';

// Importing roboto immediately applies the style to the whole project
import 'typeface-roboto';  

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact={true} path="/" component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/games" component={Games} />
				<Route path="/game/:gameID" component={Game} />
				<Route component={Error404} />
			</Switch>
		</Router>
	);
};

export default App;
