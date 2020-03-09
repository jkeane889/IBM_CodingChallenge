import axios from 'axios';
import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { getAllCharacters } from '../redux/actions';
import DropDown from './components/DropDown';
import CharacterInfo from './components/CharacterInfo';
import MovieList from './components/MovieList';

const App = props => {
    // Initially want to call the SWAPI API to generate items for drop down menu
    const [componentDidMount, setMounted] = useState(false);

    // React Hook to simulate componentDidMount React life cycle method
    if (!componentDidMount) {
      const getCharacters = async () => {
        try {
          const response = await axios.get('https://swapi.co/api/people');
          const stwarsChtrs = response.data;
          
          if (stwarsChtrs === undefined) {
            throw new Error("no response from GET request");
          };
          
          setMounted(true);
          
          // getAllCharacters()
          } catch (error) {
            // add default behavior here
          }
      };
    }

    return (
       <div>
         <DropDown />
         <CharacterInfo />
         <MovieList />
       </div>
    )
}

// Accessing Redux store for all characters
const mapStateToProps = state => {
  return {
      characters: characters
  }
}

// Using getAllCharacters Redux action
const mapDispatchToProps = {
  getAllCharacters: getAllCharacters
}

// Connecting to Redux and memoizing App component
export default connect(mapStateToProps, mapDispatchToProps)(memo(App));