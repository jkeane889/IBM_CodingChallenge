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

   // React hook to get selected IDs of character's films
   const [filmIDs, setFilmIDs] = useState(null);

   // React hook to get selected character's films
   const [films, setFilms] = useState(null);

   // React hook to show selected character's films
   const [showing, setShowing] = useState(false);

   // React hook to store character's details
   const [details, setDetails] = useState(null);

   // React Hook boolean to determine if character names have loaded
   const [loading, setLoading] = React.useState(true);

   // React Hook to store all Star Wars characters with default drop down header
   const [items, setItems] = React.useState([
     { label: "Loading ...", value: "" }
   ]);
  
  // Get all people from API, parse JSON data, then iterate over
  //  final data and create object for each label and name
  useEffect(() => {
    async function getCharacters() {
      const response = await fetch("https://swapi.co/api/people");
      const body = await response.json();
      setItems(body.results.map(({ name }) => ({ label: name, value: name })));
      setLoading(false);
    }
    getCharacters();
  }, []);

  // Use effect React hook to fetch the details of individual from API based on change
  //  in selected character
  useEffect(() => {
    async function getCharacterDetails(id) {
        const response = await axios.get(`https://swapi.co/api/people/${id}`)
        // Creating an object to store details of character to be displayed
        console.log("This is the response: ", response.data)
        let details = {};
        details.name = response.data.name;
        details.height = response.data.height;
        details.mass = response.data.mass;
        details.hairColor = response.data.hairColor;
        details.skinColor = response.data.skinColor;
        details.eyeColor = response.data.eyeColor;
        details.birthYear = response.data.birthYear;
        details.gender = response.data.gender;
        details.homeworld = response.data.homeworld;
        setDetails(details);

        let filmIDs = [];

        for (let i = 0; i < response.data.films.length; i++) {
          let newID = getFilmID(response.data.films[i]);
          filmIDs.push(newID);
        };

        setFilmIDs(filmIDs);
    }

    if (character) {
      getCharacterDetails(characterIDs.charIDs[character.toLowerCase()]);
    };
    
  }, [character]);

  // Use effect hook to fetch the details of individual's films from API
  useEffect(() => {
      async function getFilmDetails(id) {
          return await axios.get(`https://swapi.co/api/films/${id}`)
      }

      console.log("These are the filmIDs: ", filmIDs)

      let films = [];

      if (filmIDs) {
        const forLoop = async _ => {
          console.log('Start')
        
          for (let i = 0; i < filmIDs.length; i++) {
            let filmObj = {};
            const film = await getFilmDetails(filmIDs[i])
            console.log("This the film: ", film)
            filmObj.title = film.data.title;
            filmObj.description = film.data.opening_crawl; 
            films.push(filmObj);
            if (films.length === filmIDs.length - 1) {
              setShowing(true);
              console.log("This is the value of showing", showing)
            }
          }
        }

        forLoop();
        setFilms(films);
      }
  }, [filmIDs]);

    // Helper function to pass down to DropDown menu component to update user's character search
    const selectCharacter = (val) => {
      let lowerCase = val.toString().toLowerCase();
      if (!characterIDs.charIDs[lowerCase]) {
        window.alert('Your input did not contain a Star Wars character, please try again!');
        } else {
        setCharacter(val);
      }  
    };

    // Helper function to get each film's ID
    const getFilmID = (filmURL) => {
      let film = filmURL.split('/');
      // remove unnecessary last element
      film.pop();
      let filmID = film.pop();
      return filmID;
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
              <DropDown align="center" loading={loading} items={items} selectCharacter={selectCharacter}></DropDown>
            <CharacterInfo details={details}></CharacterInfo>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {showing === true && <Grid container spacing={2}>
              {films.map((film, index) => (
                <MovieListItem key={index} film={film}></MovieListItem>
              ))}
            </Grid>
          }
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Search For your Favorite Star Wars Characters!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Select a character from the drop down menu to see their details OR add a new character to fetch their details... 
        </Typography>
      </footer>
    </React.Fragment>
   )
}

export default memo(App);