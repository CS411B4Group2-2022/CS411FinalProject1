const express = require("express");

const axios = require('axios');

const $ = require('jquery')

const { appendFile } = require("fs");

const app = express();

const cors = require('cors');
const { response } = require("express");
app.use(cors({
  origin: '*'
}));

const API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

var total = 482855;
/*
function getRandomObject(max) {
  return Math.floor(Math.random() * max);
}

var random_object = getRandomObject(total).toString();

var object_data = API_URL.concat(random_object);

axios.get(object_data)
  .then(response => {
      console.log(response.data);
  })

// make a variable for the isPublicDomain property
var isPublicDomain = response.data.isPublicDomain;

// if is publicDomain is false, then get a new random object
while (isPublicDomain == false) {
  getRandomObject(total);
}
*/

/*
function getRandomObject() {
  var isPublicDomain = false;
  while (isPublicDomain == false) {
    var randomObjectID = (Math.floor(Math.random() * total)).toString;
    var randomObjectURL = API_URL.concat(randomObjectID);
    axios.get(randomObjectURL).then(function(response) {
      objectData = response.data;
    });
    isPublicDomain = objectData.isPublicDomain;
  };
    imageURL = objectData.primaryImageSmall;
    solution = objectData.country;
};
*/

app.get("/", function (req, res) {
  // Initalize globally useful variables
  var imageURL = "https://i.scdn.co/image/ab67616d0000b2732d1f18d70f80bb99e75b0209";
  var solution = "Morocco";
  var objectData = JSON.parse('{"o":true}');
  var isPublicDomain = false;
  var helpme;

  // While loop to find valid object
  /*
  while (isPublicDomain == false) {
    var randomObjectID = (Math.floor(Math.random() * total)).toString; 
    var randomObjectURL = API_URL.concat(randomObjectID);
    /*
    $.ajax({
      type: "GET",
      url: randomObjectURL,
      datatype: "json",
      success: function(response) {
        objectData = response
      }
    })
    
    axios.get(randomObjectURL).then(function(response) {
      objectData = JSON.parse(response);
    });
    isPublicDomain = objectData.isPublicDomain;
  };
  */
  // Set Image URL and Solution to called values

  axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/234').then(resp => {
    helpme = JSON.stringify(resp);
    objectData = JSON.parse(resp);
  });

  imageURL = objectData.primaryImageSmall;
  solution = objectData.country;

  // Send response
  res.send({"image":imageURL, "solution":solution, "objectData":helpme});
});

app.listen(3000, function () {
  console.log("Server is listening on localhost:3000");
});