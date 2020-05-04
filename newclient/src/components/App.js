import React from 'react';
import Navigation from './Navigation';

const LINKS = [
	{ label: 'Website', to: 'https://www.robinwieruch.de/' },
	{ label: 'Twitter', to: 'https://twitter.com/rwieruch' },
];

const App = () => (
	<div>
		hello
		<Navigation links={LINKS} />
	</div>
);

export default App;
