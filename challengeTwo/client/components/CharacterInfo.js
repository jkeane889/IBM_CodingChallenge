import axios from 'axios';
import React, { useState, memo, useEffect } from 'react';

const CharacterInfo = props => {
    
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

    let name;
    let height;
    let mass;
    let hairColor;
    let skinColor;
    let eyeColor;
    let birthYear;
    let gender;

    if (props.character) {
        useEffect(() => {
            async function getCharacterDetails(id) {
                const response = await axios.get(`https://swapi.co/api/people/${id}`)
                console.log("This is the response: ", response.data.name)
                name = response.data.name;
                height = response.data.height;
                mass = response.data.mass;
                hairColor = response.data.hairColor;
                skinColor = response.data.skinColor;
                eyeColor = response.data.eyeColor;
                birthYear = response.data.birthYear;
                gender = response.data.gender;
        
                console.log("This is the name: ", name)
                // pass back up films of character for MovieList component
                props.getCharactersFilms(response.data.films)
            }
            getCharacterDetails(charIDs[props.character]);
        }, [props.character]);
        

        return(
            <div>
                <h6>Character's Name: {name}</h6>
                <h6>Character's Height: {height}</h6>
                <h6>Character's Mass: {mass}</h6>
                <h6>Character's Hair Color: {hairColor}</h6>
                <h6>Character's Skin Color: {skinColor}</h6>
                <h6>Character's Eye Color: {eyeColor}</h6>
                <h6>Character's Birth Year: {birthYear}</h6>
                <h6>Character's Gender: {gender}</h6>
            </div>
        )
    }

}

export default memo(CharacterInfo);