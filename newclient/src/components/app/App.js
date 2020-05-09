import React from 'react';
import { Helmet } from 'react-helmet';
import { GameList } from '../games';
import { TopNav } from '../top-nav';
import { Showcase } from '../carousel';

// Importing roboto immediately applies the style to the whole project
import 'typeface-roboto';  
import { Container } from 'react-bootstrap';

const App = () => {
	return (
		<div>
			{/* React-Helmet lets us make changes to the document <head>! */}
			<Helmet>
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<title>Rec-Hub</title>
				{/* Setting the background image. TODO: What is the best practice for modifying the body? */}
				<style>{`
					body { 
						background-color: #201824;
						color: #ffffff;
					}
				`}</style>
			</Helmet>
			<TopNav />
			<Showcase />
			<Container>
				<GameList />
			</Container>
		</div>
	);
};

export default App;
