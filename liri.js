require("dotenv").config();

var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");

var userCommand = proccess.argv[2];
var userSearch = process.argv.slice(3).join(" ");

var spotify = new Spotify(keys.spotify);


switch(userCommand) {

    case "concert-this":

    // code here

    break;

    case "spotify-this-song":

    // code here

    break;

    case "movie-this":

    // code here

    break;

    case "do-what-it-says":

    // code here

    break;

    default:
    console.log("Not a valid command valid commands are: ")
    console.log("concert-this")
    console.log("spotify-this-song")
    console.log("movie-this")
    console.log("do-what-it-says")
}

