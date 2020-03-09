const express = require('express');
const cors = require("cors");
const path = require("path");
const { getCharacters } = require('./charactersHelper.js')

let app = express();

let port = 3000;

// STRETCH GOAL: Server side rendering with Gatsby & API requests made here
app.use(cors());
app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.json());

app.get('/characters', async (req, res, next) => {
  // getting list of all star wars characters
  try {
    const characters = await getCharacters()
    console.log("These are the characters: ", characters)
    res.send(characters);
  } catch(e) {
    // Handled by error handling middleware
    next(e) 
  }
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
