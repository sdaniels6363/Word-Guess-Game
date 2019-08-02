function game() {

  function selectPlayerFromArray(array) {   // picks a player at random, once selected, removes from pool so they're not picked again.

    var randomPlayerInt = Math.floor(Math.random() * players.length); // pick a player at random
    console.log("Number selected: " + randomPlayerInt); // enable for troubleshooting, comment out after deployment.

    var selectedPlayer = players[randomPlayerInt]; // save selected player to variable for easier re-use

    var playerName = selectedPlayer.name; // store player name
    console.log("Player Selected: " + playerName);  // enable for troubleshooting, comment out after deployment.

    var playerImg = selectedPlayer.img; // store player photo path
    console.log("Photo Selected: " + playerImg);   // enable for troubleshooting, comment out after deployment.

    players.pop(randomPlayerInt); // remove player from list
    console.log(randomPlayerInt + " " + playerName + " was removed from player list")


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

    var playerNameAsSpaces = convertNameToSpaces(playerName);
    console.log(playerNameAsSpaces);

    var playerValues = [] // create empty array
    playerValues.push(playerName, playerImg, playerNameAsSpaces); // adds the player's name, image, and hidden name to the array

    return playerValues;

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

  var selectedPlayer = selectPlayerFromArray(players); // Store the information of the selected player.

  window.onload = function () { // runs after the document loads, allows the images to be loaded and page to be dynamic.
    // add player image to page
    document.getElementById("player-image").src = selectedPlayer[1]; // pulls the player's photo.
    // add spaces to page for guessing player name.
    document.getElementById("player-name-as-spaces").textContent = selectedPlayer[2]; // pulls the hidden version of the name

    var guesses = parseInt(document.getElementById("guesses").textContent); // number of guesses permitted per round.
    console.log("Number of remaining guesses: " + guesses);

  }

  // game begins below this line

  var playerName = selectedPlayer[0]; // extract player information from returned array from before.
  var playerNameAsSpaces = selectedPlayer[2]; // extract player information from returned array from before.

  function convertStringToArray(name) {
    nameArray = [];
    for (i = 0; i < name.length; i++) {
      nameArray.push(name[i]); // adds each letter as an array representing the player's name.
    }
    console.log(nameArray);
    return nameArray;
  }

  var playerNameArray = convertStringToArray(playerName);
  var playerNameSpacesArray = convertStringToArray(playerNameAsSpaces);


  document.onkeyup = function (event) {

    var playerGuess = event.key;
    console.log("Player pressed " + playerGuess);

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (alphabet.includes(playerGuess)) {// if the player enters a valid key, we want to check it against the selected name
      if (playerNameArray.includes(playerGuess)) { // if the player guesses a letter that is part of the name.

        for (i = 0; i < playerNameArray.length; i++) { //loop over the player array and compare the guess to the current index

          var currentLetter = playerNameArray[i];

          if (currentLetter === playerGuess) { // if current letter is the same as the player's guess, note the index and replace the value in the playerNameSpacesArray
            playerNameSpacesArray[i] = playerGuess;
          } else {
            continue; //if it doesn't match continue until the loop finishes.
          }
        }

        document.getElementById("player-name-as-spaces").textContent = playerNameSpacesArray;
        console.log(playerNameSpacesArray);




      } else if (playerNameSpacesArray === playerNameArray) {
        alert("You win!");
      } else {// remove a guess
        var currentNumber = document.getElementById("guesses").textContent;
        var newNumber = parseInt(currentNumber) - 1;

        document.getElementById("guesses").textContent = newNumber;
        // check to see if the user has lost.
        if (parseInt(newNumber) === 0) {
          alert("You Lose!");
        }
      }

    } else {
    }
  }
}

game(); // run the game
