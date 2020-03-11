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
     color: theme.palette.primary.main
   },
   cardMedia: {
     paddingTop: '56.25%', // 16:9
     color: theme.palette.primary.main
   },
   cardContent: {
     flexGrow: 1,
   }
}));

// Passing down into MovieList item each film's title and description 
const MovieListItem = props => {
  const classes = useStyles();

  if (props.film) {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2" color="secondary">
              {props.film.title}
            </Typography>
            <Typography color="secondary">
              {props.film.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
};

export default memo(MovieListItem);