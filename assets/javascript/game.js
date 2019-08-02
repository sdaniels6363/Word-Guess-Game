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

function selectPlayerFromArray(array) {   // picks a player at random, once selected, removes from pool so they're not picked again.

  var randomPlayerInt = Math.floor(Math.random() * players.length); // pick a player at random
  console.log("Number selected: " + randomPlayerInt); // enable for troubleshooting, comment out after deployment.

  if (array.length === 0) {
    alert("No more players left, you've beat the game!")
    location.reload(); //reload the page.
  } else {
    var selectedPlayer = players[randomPlayerInt]; // save selected player to variable for easier re-use

    var playerName = selectedPlayer.name; // store player name
    console.log("Player Selected: " + playerName);  // enable for troubleshooting, comment out after deployment.

    var playerImg = selectedPlayer.img; // store player photo path
    console.log("Photo Selected: " + playerImg);   // enable for troubleshooting, comment out after deployment.

    players.splice(randomPlayerInt, 1); // remove player from list
    console.log(randomPlayerInt + " " + playerName + " was removed from player list")

    var playerNameAsSpaces = convertNameToSpaces(playerName);
    console.log(playerNameAsSpaces);

    var playerValues = [] // create empty array
    playerValues.push(playerName, playerImg, playerNameAsSpaces); // adds the player's name, image, and hidden name to the array

    return playerValues;

  }

}

function convertStringToArray(name) {
  nameArray = [];
  for (i = 0; i < name.length; i++) {
    nameArray.push(name[i]); // adds each letter as an array representing the player's name.
  }
  console.log(nameArray);
  return nameArray;
}

function loadGame(array) {

  var selectedPlayer = selectPlayerFromArray(array); // Store the information of the selected player.

  // add player image to page
  document.getElementById("player-image").src = selectedPlayer[1]; // pulls the player's photo.
  // add spaces to page for guessing player name.
  document.getElementById("player-name-as-spaces").textContent = selectedPlayer[2]; // pulls the hidden version of the name
  // resets player message
  document.getElementById("player-message").textContent = "";


  // game begins below this line

  var playerName = selectedPlayer[0]; // extract player information from returned array from before.
  var playerNameAsSpaces = selectedPlayer[2]; // extract player information from returned array from before.

  var playerNameArray = convertStringToArray(playerName);
  var playerNameSpacesArray = convertStringToArray(playerNameAsSpaces);

  var gameValues = {
    playerNameArray: playerNameArray,
    playerNameSpacesArray: playerNameSpacesArray,
  }

  return gameValues; //had to put all of the arrasy in an object since we can only return one element with a function.
}

function game() {

  var gameValues = loadGame(players);
  var playerNameArray = gameValues.playerNameArray;
  var playerNameSpacesArray = gameValues.playerNameSpacesArray;
  var goodLetterArray = [] // starts out as empty
  var badLetterArray = [] // starts out as empty

  document.onkeyup = function (event) {

    var playerGuess = (event.key).toLowerCase(); // make all input lowercase.  Allows the game to work if caps lock is on.

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (alphabet.includes(playerGuess)) {// if the player enters a valid key, we want to check it against the selected name

      if (playerNameArray.includes(playerGuess)) { // if the player guesses a letter that is part of the name.

        if (goodLetterArray.includes(playerGuess)) {
          // do nothing
        } else {
          goodLetterArray.push(playerGuess); // record the good guess, if it's guessed again, it will do nothing.
          for (i = 0; i < playerNameArray.length; i++) { //loop over the player array and compare the guess to the current index

            var currentLetter = playerNameArray[i];

            if (currentLetter === playerGuess) { // if current letter is the same as the player's guess, replace the value in the playerNameSpacesArray
              playerNameSpacesArray[i] = playerGuess;
            } else {
              continue; //if it doesn't match continue until the loop finishes.
            }

          }

        }

        document.getElementById("player-name-as-spaces").textContent = playerNameSpacesArray.join(""); //displays the array as a string without the commas.
        console.log(playerNameSpacesArray);

        if (playerNameArray.join("") === playerNameSpacesArray.join("")) { // if the two arrays match, then you win.
          var playerMessage = "<br><br>YOU WIN!!!<br><br>Press Enter to move to next player.";
          document.getElementById("player-message").innerHTML = playerMessage;

        }

      } else {// remove a guess and store the guessed letters

        if (badLetterArray.includes(playerGuess)) {
          // don't punish player for guessing same letter
        } else if (playerNameArray.join("") === playerNameSpacesArray.join("") && (event.keyCode !== 13)){
          // if the arrays match, and the user presses any key except enter, do nothing.
        } else {
          var currentNumber = document.getElementById("guesses").textContent;
          var newNumber = parseInt(currentNumber) - 1;
          badLetterArray.push(playerGuess);
          document.getElementById("guessed-letters").textContent = badLetterArray;
          document.getElementById("guesses").textContent = newNumber;
          // check to see if the user has lost.
          if (parseInt(newNumber) === 0) {
            var playerMessage = "<br><br>YOU LOSE!<br><br>Press Enter to restart."
            document.getElementById("player-message").innerHTML = playerMessage;
            if (event.keyCode === 13) {
              location.reload();
            }
          }
        }
      }

    } else { // if player hits non alpha key, don't do anything

      var playerMessage = document.getElementById("player-message").textContent
      if (playerMessage.includes("WIN") && (event.keyCode === 13)) {
        document.getElementById("score").textContent = parseInt(document.getElementById("score").textContent) + 1;
        document.getElementById("guesses").textContent = 11;
        document.getElementById("guessed-letters").textContent = "";
        game();
      } else if (playerMessage.includes("LOSE") && event.keyCode === 13) { // reload the page if you lose.
        location.reload();
      }

    }
  }

}




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
    img: "assets/images/milner.jpg"
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

window.onload = function () { // runs after the document loads, allows the images to be loaded and page to be dynamic.
  document.getElementById("player-message").innerHTML = "<br><br>Welcome to the Word Guess Game - Liverpool Edition<br><br>Press Enter to continue.<br><br>You will have 11 guesses per player, if you guess correctly, the guesses are reset to 11 for the next player"
  document.getElementById("player-image").src = "assets/images/liverbird.svg";

}

document.onkeyup = function (event) {
  if (event.keyCode === 13) {
    game();
  }
}

