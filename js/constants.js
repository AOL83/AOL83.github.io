// GLOBALS
const allChoices = ["scissors", "spock", "paper", "lizard", "rock"];
const startPage = document.querySelector("#startPage");
const arrChoices = startPage.querySelectorAll("div");
const resultPage = document.querySelector("#resultPage");
const containerScore = document.querySelectorAll(".score")[0];
const score = document.querySelector("#score");
const userIcon = resultPage.querySelector("#userIcon");
const houseIcon = resultPage.querySelector("#houseIcon");
const messageWhoWon = document.querySelector("#whoWon");
const playAgainButton = document.querySelector("#playAgain");

// SOUNDS GLOBALS
const bgSound = document.querySelector("[data-sound=bg-sound]");
const audioUserChoice = document.querySelector("[data-sound=user-choice]");
const audioYouWon = document.querySelector("[data-sound=you-won]");
const audioYouLose = document.querySelector("[data-sound=you-lose]");
const audioDraw = document.querySelector("[data-sound=draw]");
const audioGameOver = document.querySelector("[data-sound=draw]");

// MODAL
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const btnOpenModal = document.querySelector("#openModal");
const xCloseModal = document.querySelector("#closeModal");
