import axios from 'axios';
import React, { useState, memo, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    
    const charIDs = {
        'Luke Skywalker': 1,
        'C-3PO': 2,
        'R2-D2': 3,
        'Darth Vader': 4,
        'Leia Organa': 5,
        'Owen Lars': 6,
        'Beru Whitesun lars': 7,
        'R5-D4': 8,
        'Biggs Darklighter': 9,
        'Obi-Wan Kenobi': 10
    };
    
    if (props.character) {
        let name;
        let height;
        let mass;
        let hairColor;
        let skinColor;
        let eyeColor;
        let birthYear;
        let gender;

        useEffect(() => {
            async function getCharacterDetails(id) {
                const response = await axios.get(`https://swapi.co/api/people/${id}`)
                // Creating an object to store details of character to be displayed
                let details = {};
                details.name = response.data.name;
                details.height = response.data.height;
                details.mass = response.data.mass;
                details.hairColor = response.data.hairColor;
                details.skinColor = response.data.skinColor;
                details.eyeColor = response.data.eyeColor;
                details.birthYear = response.data.birthYear;
                details.gender = response.data.gender;
                
                // Passing back up details of chracter and the films
                //  they have been in
                props.getDetails(details)
                props.getCharactersFilms(response.data.films)
            }
            
            getCharacterDetails(charIDs[props.character]);
        }, [props.character]);
        
        const classes = useStyles();

        // Ternary operators to catch if any characteristic is undefined; if so, just returns an empty string
        if (props.details) {
            return (
              <div className={classes.root}>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>Name: {props.details.name ? props.details.name : ''}</Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>Height: {props.details.height ? props.details.height : '' }</Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>Mass: {props.details.mass ? props.details.mass : ''}</Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>Hair: {props.details.hairColor ? props.details.hairColor : ''}</Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>Skin: {props.details.skinColor ? props.details.skinColor : ''}</Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>Eye-Color: {props.details.eyeColor}</Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>Birthday: {props.details.birthYear}</Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>Gender: {props.details.gender ? props.details.gender : ''}</Paper>
                  </Grid>
                </Grid>
              </div>
            );
        }

    }

}

export default memo(CharacterInfo);