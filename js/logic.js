window.onload = function() {
  // CLOCK
  function updateClock() {
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();
    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time;
  }

  setInterval(updateClock, 1000);

  // START PLAY
  let tries = 6; // Add a variable to store the amount of tries
  const handleClick = (event) => {
    audioUserChoice.play();
    document.body.classList.toggle("result");
    userIcon.classList.remove("scissors", "spock", "paper", "lizard", "rock");
    houseIcon.classList.remove("scissors", "spock", "paper", "lizard", "rock");
    playAgainButton.style.display = "none";
    messageWhoWon.style.display = "none";
    houseIcon.style.display = "none";

    const userPlayerChoice = event.target.dataset.choice;
    const housePlayerIndex = Math.floor(Math.random() * 5);
    const housePlayerChoice = allChoices[housePlayerIndex];

    startPage.style.display = "none";
    resultPage.style.display = "block";
    userIcon.classList.toggle(userPlayerChoice);
    scoreTotal = 0;

    // PRINT SCORE
    whoWon = () => {
      // Get the current score from local storage or set it to 0 if not found
      scoreTotal = parseInt(localStorage.getItem('score')) || 0;
      score.innerHTML = scoreTotal;

      let showScoreTotal = () => {
        setTimeout(() => {
          score.innerHTML = scoreTotal;
          let bgScore =
            scoreTotal < 0
              ? "hsl(0, 100%, 60%)"
              : scoreTotal == 0
              ? "hsl(0, 0%, 100%)"
              : "rgb(183, 241, 183)";
          containerScore.style.backgroundColor = bgScore;
        }, 1000);
      };
      // Check if the player has reached the maximum amount of tries
      if (tries === 0) {
        messageWhoWon.innerHTML = '<div id="game-over">Refresh🤪</div>';
        setTimeout(() => {
          audioGameOver.play();
        }, 1000);
        playAgainButton.style.display = "none";
        return;
      }
      // Decrement the number of tries each time the function is called
      tries--;

      // GAME RULES CONDITIONS
      if (userPlayerChoice == housePlayerChoice) {
        messageWhoWon.innerHTML = '<div id="draw-message">DRAW &#128580;<div>';
        setTimeout(() => {
          audioDraw.play();
        }, 1000);
      } else if (
        (userPlayerChoice == "scissors" &&
          (housePlayerChoice == "spock" || housePlayerChoice == "rock")) ||
        (userPlayerChoice == "spock" &&
          (housePlayerChoice == "paper" || housePlayerChoice == "lizard")) ||
        (userPlayerChoice == "paper" &&
          (housePlayerChoice == "scissors" || housePlayerChoice == "lizard")) ||
        (userPlayerChoice == "lizard" &&
          (housePlayerChoice == "scissors" || housePlayerChoice == "rock")) ||
          (userPlayerChoice == "rock" &&
          (housePlayerChoice == "spock" || housePlayerChoice == "paper"))
      ) {
        messageWhoWon.innerHTML =
          '<div id="you-lose-message">YOU LOSE &#129324;</div>';
        scoreTotal = scoreTotal - 1;
        setTimeout(() => {
          audioYouLose.play();
        }, 1000);
        localStorage.setItem('score', scoreTotal);
        showScoreTotal();
      } else {
        messageWhoWon.innerHTML =
          '<div id="you-won-message">YOU WIN &#128513;</div>;';
        scoreTotal = scoreTotal + 1;
        setTimeout(() => {
          audioYouWon.play();
        }, 1000);
        localStorage.setItem('score', scoreTotal);
        showScoreTotal();
      }
    };
  
    setTimeout(() => {
      whoWon();
    }, 1000);
  
    setTimeout(() => {
      houseIcon.style.display = "block";
      houseIcon.classList.add(housePlayerChoice);
      setTimeout(() => {
        messageWhoWon.style.display = "block";
        playAgainButton.style.display = "block";
      }, 1000);
    }, 1000);
  };
  
  
  for (let el of arrChoices) {
    el.addEventListener("click", handleClick);
    el.addEventListener("keypress", handleClick);
  }
  
  playAgainButton.addEventListener("click", () => {
    document.body.classList.remove("result");
    startPage.style.display = "block";
    resultPage.style.display = "none";
  });
  
  document.querySelector("#switch").addEventListener("click", (e) => {
    e.target.classList.toggle("playBgSound");
    e.target.classList.contains("playBgSound") ? bgSound.play() : bgSound.pause();
  });
};
