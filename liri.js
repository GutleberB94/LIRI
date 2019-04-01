require("dotenv").config();

var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var Spotify = require("node-spotify-api");

var userCommand = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");




switch (userCommand) {

    case "concert-this":

        getConcert(userSearch);

        break;

    case "spotify-this-song":

        getSpotifyInfo(userSearch);

        break;

    case "movie-this":

        // code here

        break;

    case "do-what-it-says":

        // code here

        break;

    default:
        console.log(userCommand + " is not a valid command, valid commands are: ")
        console.log("concert-this")
        console.log("spotify-this-song")
        console.log("movie-this")
        console.log("do-what-it-says")
}

function getConcert(userSearch) {

    var artist = userSearch;

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=trilogy")
        .then(function (response) {

            var venueName = response.data[0].venue.name;
            var venueCity = response.data[0].venue.city;
            var venueState = response.data[0].venue.region;
            var eventDate = moment(response.data[0].datetime).format("MM-DD-YYYY");

            console.log("\n" + userSearch + "'s next concert will be at: ");
            console.log("-------------------------------------------------------");
            console.log("\nVenue Name: " + venueName);
            console.log("Venue Location: " + venueCity + ', ' + venueState);
            console.log("Event Date: " + eventDate);



        }) // axios close
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
} // function close


function getSpotifyInfo(userSearch) {

var spotify = new Spotify(keys.spotify);

    if(!userSearch) {

        userSearch = "The Sign"

    }

    spotify.search({type: 'track', query: userSearch}, function(error, response) {

        if (error) {

            console.log("error" + error);
            return error;
        }

        var artist = response.tracks.items[0].album.artists[0].name;
        var songName = response.tracks.items[0].name;
        var previewLink = response.tracks.items[0].href;
        var album = response.tracks.items[0].album.name;

        console.log("\nHere is some info about the song " + userSearch + " from spotify");
        console.log("-------------------------------------------------------");
        console.log("\nArtist: " + artist);
        console.log("Song Name: " + songName);
        console.log("Preview: " + previewLink);
        console.log("Album: " + album);


    }) // spotify close

} // function close


function movieSearch(userSearch) {




} // function close
