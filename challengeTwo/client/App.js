import axios from 'axios';
import React, { useState, memo, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import AndroidIcon from '@material-ui/icons/Android';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DropDown from './components/DropDown';
import CharacterInfo from './components/CharacterInfo';
import MovieListItem from './components/MovieListItem';
import characterIDs from './components/characterIDs'

const useStyles = makeStyles(theme => ({
   icon: {
     marginRight: theme.spacing(2),
   },
   heroContent: {
     backgroundColor: theme.palette.background.paper,
     padding: theme.spacing(8, 0, 6),
   },
   heroButtons: {
     marginTop: theme.spacing(4),
   },
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
   },
   footer: {
     backgroundColor: theme.palette.background.paper,
     padding: theme.spacing(6),
   },
}));

const App = props => {
   // using MaterialUI styles
   const classes = useStyles();

   // React hook to store selected character 
   const [character, setCharacter] = useState(null);

   // React hook to get selected character's films
   const [films, setFilms] = useState(null);
   
   // React hook to show selected character's films
   const [showing, setShowing] = useState(null);

   // React book to store character's details
   const [details, setDetails] = useState(null);

   // get details of character
   const getDetails = (val) => {
     setDetails(val);
   };

   // select character
   const selectCharacter = (val) => {
     let lowerCase = val.toString().toLowerCase();
     console.log("This is to lowercase", lowerCase)
     console.log("the obj:", characterIDs)
     if (!characterIDs.charIDs[lowerCase]) {
       window.alert('Your input did not contain a Star Wars character, please try again!');
       setCharacter('');
      } else {
        setCharacter(val);
     }  
   };

   // get films of character
   const getCharactersFilms = (val) => {
    setFilms(val);
    setShowing(true);
   };

   return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AndroidIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            IBM Star Wars Coding Challenge Two
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              The Star Wars Characters
            </Typography>
              <DropDown align="center" selectCharacter={selectCharacter}></DropDown>
            <CharacterInfo character={character} details={details} getDetails={getDetails} getCharactersFilms={getCharactersFilms}></CharacterInfo>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {showing && <Grid container spacing={2}>
              {films.map((film, index) => (
                <MovieListItem key={index} film={film}></MovieListItem>
              ))}
            </Grid>
          }
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Search For your Favorite Star Wars Characters!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Select a character from the drop down menu to see their details OR add a new character to fetch their details... 
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
   )
}

export default memo(App);