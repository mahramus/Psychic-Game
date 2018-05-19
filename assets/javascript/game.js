var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var computerGuess = letterArray[Math.floor(Math.random() * letterArray.length)];

    var wins = 0;
    var losses = 0;
    var remaining = 5;
    var Guesses = [];
    var GuessLength = Guesses.length;


     //Need alphaOnly to work; also to give GAME OVER after 5 guesses, then reset stats.

      document.onkeyup = function alphaOnly(event) {
        var userGuess = event.key;
        Guesses.push(" " + userGuess);
        if (userGuess === computerGuess) {
          wins++;
          alert("You guessed it!");
          remaining = 5;
          Guesses = [];
        } else if (userGuess != computerGuess) {
          remaining--;
        }

        var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + remaining + "</p>" +
          "<p>Your Guesses So Far: " + Guesses + "</p>";

        document.querySelector("#gameboard").innerHTML = html;


        console.log("Computer Guess: " + computerGuess);
        console.log("User Guess: " + userGuess);
        console.log("GuessLength: " + Guesses.length);
      };