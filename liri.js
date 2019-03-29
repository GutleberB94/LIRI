//require(".env").config();

var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var spotify = require("spotify");

var userCommand = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

//var spotify = new Spotify(keys.spotify);


switch (userCommand) {

    case "concert-this":

        getConcert(userSearch);

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
        console.log(userCommand + " is not a valid command, valid commands are: ")
        console.log("concert-this")
        console.log("spotify-this-song")
        console.log("movie-this")
        console.log("do-what-it-says")
}

console.log(userCommand)
console.log(userSearch)


function getConcert(userSearch) {

    var artist = userSearch;

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=trilogy")
        .then(function (response) {

            console.log(response);



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
