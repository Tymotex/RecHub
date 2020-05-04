import React from 'react';

// Material UI:
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// ===== Custom styles =====
const useStyles = makeStyles({
    root: {
        maxWidth: "75%",
    },
});

// ===== Component Definition =====
const Game = (props) => {
    const classes = useStyles(props);
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image="https://i.ytimg.com/vi/Rv0cx0vNSWg/maxresdefault.jpg"
                    title="GAME TITLE HERE"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Sumire Yoshizawa
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        "The thought kept coming back. Every day, my mind went back to it. Everyone would be better off if I didn't exist. Either that, or I should just become Kasumi. She's the one people really want. Sumire's the one who's useless. Pointless. Who would care if she died?"
                        —Sumire talking to the protagonist, Persona 5 Royal
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default Game;
