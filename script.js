// ========== Cursor ==========
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// ========== Audio ==========
const bgAudio = document.getElementById('bgAudio');
const audioControl = document.getElementById('audioControl');

audioControl.addEventListener('click', () => {
  if (bgAudio.paused) { bgAudio.play(); audioControl.textContent='⏸'; }
  else { bgAudio.pause(); audioControl.textContent='▶'; }
});

// ========== Playlist Panel ==========
const playlist = document.getElementById('playlist');
const togglePlaylist = document.getElementById('togglePlaylist');
const closePlaylist = document.getElementById('closePlaylist');

togglePlaylist.addEventListener('click', () => {
  playlist.classList.toggle('closed');
});
closePlaylist.addEventListener('click', () => {
  playlist.classList.add('closed');
});
