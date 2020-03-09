const express = require('express');
var bodyParser = require('body-parser');

let app = express();
let port = 1128;

// STRETCH GOAL: Server side rendering with Gatsby & API requests made here

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
