// AUDIO PLAYER
const audio = document.getElementById("audio");
const playButton = document.getElementById("play-button");
const audioFile = document.getElementById("audio-file");
const playIcon = document.getElementById("play-icon");

audioFile.addEventListener("change", (event) => {
  audio.src = URL.createObjectURL(event.target.files[0]);
});

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.classList.add("playing");
    playIcon.classList.add("fa-spin");
  } else {
    audio.pause();
    playButton.classList.remove("playing");
    playIcon.classList.remove("fa-spin");
  }
});

audio.addEventListener("ended", () => {
  playButton.classList.remove("playing");
  playIcon.classList.remove("fa-spin");
});
