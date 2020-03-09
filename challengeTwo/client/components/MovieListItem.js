import axios from 'axios';
import React, { useState, memo, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import cloneWars from '../../assets/clonewars.jpg';
import empirestrikesback from '../../assets/empirestrikesback.jpg';
import forceawakens from '../../assets/forceawakens.jpg';
import lastjedi from '../../assets/lastjedi.jpg';
import newhope from '../../assets/newhope.jpg';
import phantommenace from '../../assets/phantommenace.jpg';
import returnofthejedi from '../../assets/returnofthejedi.jpg';
import revengeofthesith from '../../assets/revengeofthesith.jpg';
import riseofskywalker from '../../assets/riseofskywalker.jpg';
import rogueone from '../../assets/rogueone.jpg';
import solo from '../../assets/solo.jpg';

const useStyles = makeStyles(theme => ({
   cardGrid: {
     padding: theme.spacing(1)
   },
   card: {
     height: '100%',
     display: 'flex',
     flexDirection: 'column',
   },
   cardMedia: {
     paddingTop: '56.25%', // 16:9
   },
   cardContent: {
     flexGrow: 1,
   }
}));

const movieImages = {
  
}

const MovieListItem = props => {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [title, setTitle] = useState(null);

if (props.film) {
  let url = props.film.toString().split('/');
  // Popping off unused element from input string
  url.pop();
  // getting ID for film to now display appropriate details
  let filmID = url.pop();
  console.log("This is a filmID: ", filmID)

  useEffect(() => {
      async function getFilmInformation(id) {
          const response = await axios.get(`https://swapi.co/api/films/${filmID}`)
          console.log("This is the response: ", response.data)
          setImage()          
      }
      getFilmInformation(filmID);
  }, []);
}

  return (
    <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Heading
            </Typography>
            <Typography>
              This is a media card. You can use this section to describe the content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
            <Button size="small" color="primary">
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>
  );
}

export default memo(MovieListItem);