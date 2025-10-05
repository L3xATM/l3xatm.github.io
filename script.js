// Audio control
const audio = document.getElementById('bgAudio');
const control = document.getElementById('audioControl');
control.addEventListener('click', () => {
  if(audio.paused){ audio.play(); control.textContent = '⏸'; }
  else { audio.pause(); control.textContent = '▶'; }
});

// Playlist panel
const playlist = document.getElementById('playlist');
const toggle = document.getElementById('togglePlaylist');
const closeP = document.getElementById('closePlaylist');

toggle.addEventListener('click', () => playlist.classList.toggle('open'));
closeP.addEventListener('click', () => playlist.classList.remove('open'));

// Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
