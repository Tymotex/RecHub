import React from 'react';
import GameList from './ui/GameList';
import Navbar from './ui/Navbar';

// Material UI:
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

// ===== Custom styles =====
const useStyles = makeStyles({
    padded: {
        padding: '30px',
	}
});

const App = (props) => {
	const classes = useStyles(props);
	return (
		<Box bgcolor="primary.dark">
			<Navbar bgcolor="primary.dark" />
			<Container className={classes.padded}>
				<GameList />
			</Container>
		</Box>
	);
};

export default App;
