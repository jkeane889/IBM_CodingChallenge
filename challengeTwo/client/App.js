import axios from 'axios';
import React, { useState, memo, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { getAllCharacters } from '../redux/actions';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import AndroidIcon from '@material-ui/icons/Android';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import Link from '@material-ui/core/Link';
import DropDown from './components/DropDown';
import CharacterInfo from './components/CharacterInfo';
import MovieListItem from './components/MovieListItem';

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

   const selectCharacter = (val) => {
      console.log("This is the updated charVal: ", val)
      setCharacter(val);
   };

   const getCharactersFilms = (val) => {
    console.log("These are the character's films: ", val)
    setFilms(val);
    setShowing(true);
   };

   let cards = [1, 2, 3, 4, 5, 6, 7]

   // if there are API results, iterate over and get all character names and push into new Hook array, pass this down
   //    to drop down menu as options

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
              Star Wars Cast
            </Typography>
              <DropDown align="center" selectCharacter={selectCharacter}></DropDown>
            <CharacterInfo character={character} getCharactersFilms={getCharactersFilms}></CharacterInfo>
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
          Select a character from the drop down menu to see their details... 
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
   )
}

// // Accessing Redux store for all characters
// const mapStateToProps = state => {
//   return {
//       characters: characters
//   }
// }

// // Using getAllCharacters Redux action
// const mapDispatchToProps = {
//   getAllCharacters: getAllCharacters
// }

// Connecting to Redux and memoizing App component
// export default connect(mapStateToProps, mapDispatchToProps)(memo(App));
export default memo(App);