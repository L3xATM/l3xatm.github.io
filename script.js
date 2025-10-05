
const audio = new Audio('vuelta_a_la_luna.mp3');
audio.loop = true;
audio.volume = 0.5;

const btn = document.getElementById('audio-control');
let isPlaying = false;

btn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    btn.textContent = '▶️';
  } else {
    audio.play();
    btn.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
});
