const axios = require('axios');

const getCharacters = async () => {
    try {
        const response = await axios.get('https://swapi.co/api/people');
        const stwarsChtrs = response.data.results;
        let charNames = [];

        // Name for drop down menu and ID for API call for character
        for (let i = 0; i < stwarsChtrs.length; i++) {
            let charObj = {}
            charObj.name = stwarsChtrs[i].name;
            charObj.id = i + 1;
            charNames.push(charObj);
        };

        if (stwarsChtrs === undefined) {
            throw new Error("no response from GET request");
        } else {
            return charNames
        }

    } catch (error) {
        // add default behavior here
        console.log("Error getting from API request")
    }
};

// create function to parseOut character names from movies to send back for dropDown menu

// for POST request from drop down menu, get character's description
//  and then iterate over results and send back movie titles

module.exports = { getCharacters };