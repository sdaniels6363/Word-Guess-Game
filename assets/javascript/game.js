// Global variables below this line.

// player array and picture information
var players = [
  { 
    name: "alisson",
    img: "assets/images/alisson.jpg"
  },
  { 
    name: "firmino",
    img: "assets/images/firmino.jpg"
  },
  { 
    name: "mane",
    img: "assets/images/mane.jpg"
  },
  { 
    name: "rush",
    img: "assets/images/rush.jpg"
  },
  { 
    name: "alonso",
    img: "assets/images/alonso.jpg"
  },
  { 
    name: "gerrard",
    img: "assets/images/gerrard.jpg"
  },
  { 
    name: "milner",
    img: "assets/images/milner.jpeg"
  },
  { 
    name: "salah",
    img: "assets/images/salah.jpg"
  },
  { 
    name: "barnes",
    img: "assets/images/barnes.jpg"
  },
  { 
    name: "henderson",
    img: "assets/images/hendo.jpg"
  },
  { 
    name: "origi",
    img: "assets/images/origi.jpg"
  },
  {
    name: "alexander-arnold",
    img: "assets/images/taa.jpg"
  },
  {
    name: "carragher",
    img: "assets/images/carragher.jpg"
  },
  {
    name: "dalglish",
    img: "assets/images/kenny.png"
  },
  {
    name: "robertson",
    img: "assets/images/robertson.jpg"
  },
  {
    name: "van dijk",
    img: "assets/images/vvd.png"
  },
];

console.log("Loaded Player List");

window.onload=function(){ // runs after the document loads 
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
}
