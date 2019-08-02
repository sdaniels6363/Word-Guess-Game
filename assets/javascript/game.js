

// functions
function selectPlayerFromArray(array) {
  // pick a player at random, once selected, remove from pool so they're not picked again.
  var randomPlayerInt = Math.floor(Math.random() * players.length); // pick a player at random
  console.log("Number selected: " + randomPlayerInt); // enable for troubleshooting, comment out after deployment.

  var selectedPlayer = players[randomPlayerInt]; // save selected player to variable for easier re-use

  var playerName = selectedPlayer.name; // store player name
  console.log("Player Selected: " + playerName);  // enable for troubleshooting, comment out after deployment.

  var playerImg = selectedPlayer.img; // store player photo path
  console.log("Photo Selected: " + playerImg);   // enable for troubleshooting, comment out after deployment.

  players.pop(randomPlayerInt); // remove player from list
  console.log(randomPlayerInt + " " + playerName + " was removed from player list")

  var playerNameAsSpaces = convertNameToSpaces(playerName);
  console.log(playerNameAsSpaces);

  var playerValues = 
  
  return playerValues;

}

function convertNameToSpaces(name) { // this function does as the name suggests.
  var length = name.length
  var spaces = ""
  for (i = 0; i < length; i++) {
    var letter = name[i];
    if (letter === " ") { // if there is a space in the name, represent it as an actual space, rather than an underscore.
      var spaces = spaces + " ";
    } else if (letter === "-") { // if there is a dash in the name, represent it as a dash, rather than an underscore.
      var spaces = spaces + "-";
    } else { // if no space, replace letter with underscore.
      var spaces = spaces + "_";
    }
  }
  return spaces;
}

// script execution on page.
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
console.log("Loaded Player List"); // used to confirm the array above has been loaded.

var selectedPlayer = selectPlayerFromArray(players);

window.onload = function () { // runs after the document loads, code that modifies html here
  // add player image to page
  document.getElementById("player-image").src = playerImg;
  // add spaces to page for guessing player name.
  document.getElementById("player-name-as-spaces").innerText = playerNameAsSpaces;
}

// game begins below this line

function game() {
  var guesses = 11; // number of guesses permitted per round.


  function letterIndex(playerName, playerGuess) {
    if (playerName.match(playerGuess)) { // if player guesses a correct letter, return the index of that letter 
      var count = new RegExp(playerGuess, "g"); // checks to see if a letter occurs more than once.
      console.log("Number of occurences of the guessed letter " + count)
      var index = playerName.indexOf(playerGuess);
      return index;
    } else { // if player guesses incorrect letter remove a guess
      return guesses - 1;
    };
  }

  function replaceLetter(string, index, replacementLetter) { // used to replace the hidden letter with a correct letter
    return string.substring(0, index) + replacementLetter + string.substring(index + 1);
  }

  document.onkeyup = function (event) {
    var guessesRemaining = document.getElementById("remaining-guesses"); // allow 11 guesses per round.
    console.log("Guesses Remaining: " + guessesRemaining);
    var playerGuess = event.key;
    console.log("Player pressed " + playerGuess);
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    if (alphabet.includes(playerGuess)) {// if the player enters a valid key, we want to check it against the selected name
      while (guessesRemaining > 0) { // only run this code if they have more than 0 guesses left
        var indexOfLetterInName = letterIndex(playerName, playerGuess); // returns the index of the guessed letter
        console.log(indexOfLetterInName);
        var guessedName = replaceLetter(playerNameAsSpaces, indexOfLetterInName, playerGuess);
        console.log(guessedName);
        document.getElementById("player-name-as-spaces").innerText = guessedName;
        // var playerNameAsSpaces = guessedName;
        console.log("valid key pressed")
      }
    } else { // if no valid key is pressed log to console. 
      console.log("invalid key pressed")
    }
  }

}

game(); // run the game








