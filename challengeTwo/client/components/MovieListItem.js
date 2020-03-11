import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { useState, memo, useEffect } from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#f5f5f5',
        main: grey[900],
        dark: '#424242'
      },
      secondary: {
        light: '#ffff8d',
        main: '#ffea00',
        dark: '#ffd600'
    }
  }
});

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
            <Typography gutterBottom variant="h5" component="h2" color="primary">
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