// Global variables below this line.

// player array and picture information
var players = [
  { 
    name: "alisson",
    img: "alisson.jpg"
  },
  { 
    name: "firmino",
    img: "firmino.jpg"
  },
  { 
    name: "mane",
    img: "mane.jpg"
  },
  { 
    name: "rush",
    img: "rush.jpg"
  },
  { 
    name: "alonso",
    img: "alonso.jpg"
  },
  { 
    name: "gerrard",
    img: "gerrard.jpg"
  },
  { 
    name: "milner",
    img: "milner.jpeg"
  },
  { 
    name: "salah",
    img: "salah.jpg"
  },
  { 
    name: "barnes",
    img: "barnes.jpg"
  },
  { 
    name: "henderson",
    img: "hendo.jpg"
  },
  { 
    name: "origi",
    img: "origi.jpg"
  },
  {
    name: "alexander-arnold",
    img: "taa.jpg"
  },
  {
    name: "carragher",
    img: "carragher.jpg"
  },
  {
    name: "dalglish",
    img: "kenny.png"
  },
  {
    name: "robertson",
    img: "robertson.jpg"
  },
  {
    name: "van dijk",
    img: "vvd.png"
  },
]

console.log("Loaded Player List")


var guessesRemaining = 11 // allow 11 guesses per round.

// pick a player at random, once selected, remove from pool so they're not picked again.
var randomPlayerInt = Math.floor(Math.random() * players.length); // pick a player at random
console.log("Number selected: "+randomPlayerInt); // enable for troubleshooting, comment out after deployment.

var selectedPlayer = players[randomPlayerInt]; // save selected player to variable for easier re-use

var playerName = selectedPlayer.name; // store player name
console.log("Player Selected: "+playerName);  // enable for troubleshooting, comment out after deployment.

var playerImg = selectedPlayer.img; // store player photo path
console.log("Photo Selected: "+playerImg);   // enable for troubleshooting, comment out after deployment.


// add player image to page
document.getElementById("player-image").src = playerImg;
document.getElementById("player-image").alt = playerName;

