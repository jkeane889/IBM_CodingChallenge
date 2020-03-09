import axios from 'axios';
import React, { useState, memo, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const CharacterInfo = props => {

  const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));
  
  if (props.details) {
    const classes = useStyles();

    // Ternary operators to catch if any characteristic is undefined; if so, just returns an empty string
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography display='block'>
                Name: {props.details.name ? props.details.name : ''}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography display='block'>
              Height: {props.details.height ? props.details.height : '' }
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography display='block'>
                Mass: {props.details.mass ? props.details.mass : ''}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography display='block'>
                Hair: {props.details.hairColor ? props.details.hairColor : ''}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography display='block'>
                Skin: {props.details.skinColor ? props.details.skinColor : ''}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography display='block'>
                Eye-Color: {props.details.eyeColor ? props.details.eyeColor : ''}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography display='block'>
                Birthday: {props.details.birthYear ? props.details.birthYear : ''}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Typography display='block'>
                  Gender: {props.details.gender ? props.details.gender : ''}
                </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default memo(CharacterInfo);