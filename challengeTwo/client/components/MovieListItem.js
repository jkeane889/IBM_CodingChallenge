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

const MovieListItem = props => {
  const classes = useStyles();
  const [filmTitle, setTitle] = useState(null);
  const [filmDesc, setDesc] = useState(null);

  if (props.film) {
    let url = props.film.toString().split('/');
    // Popping off unused element from input string
    url.pop();
    // getting ID for film to now display appropriate details
    let filmID = url.pop();

    useEffect(() => {
      // get character details and id
        async function getCharacterDetails(id) {
            const response = await axios.get(`https://swapi.co/api/films/${id}`)
            setTitle(response.data.title);
            setDesc(response.response.data.opening_crawl);
        }
        getCharacterDetails(filmID);
    }, [props.character]);
    
    return (
      <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {filmTitle}
              </Typography>
              <Typography>
                {filmDesc}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    );
  }
}

export default memo(MovieListItem);