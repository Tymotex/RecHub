import React from 'react';
import Game from './Game';

// Material UI:
import Grid from '@material-ui/core/Grid';

// ===== Custom styles =====

// ===== Component Definition =====
const GameList = (props) => {
    return (
        <Grid container spacing={3} align = "center">
            <Grid item xs={6} sm={6}>
                <Game />
            </Grid>
            <Grid item xs={6} sm={6}>
                <Game />
            </Grid>
            <Grid item xs={6} sm={6}>
                <Game />
            </Grid>
            <Grid item xs={6} sm={6}>
                <Game />
            </Grid>
        </Grid>
    );
};

export default GameList;