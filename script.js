const audio = document.getElementById('bgAudio');
const audioControl = document.getElementById('audioControl');
const playlist = document.getElementById('playlist');
const togglePlaylist = document.getElementById('togglePlaylist');
const closePlaylist = document.getElementById('closePlaylist');

audioControl.addEventListener('click', () => {
  if(audio.paused){ audio.play(); audioControl.textContent='⏸'; }
  else{ audio.pause(); audioControl.textContent='▶'; }
});

togglePlaylist.addEventListener('click', ()=> {
  playlist.classList.toggle('closed');
  playlist.classList.toggle('open');
});

closePlaylist.addEventListener('click', ()=> {
  playlist.classList.add('closed');
  playlist.classList.remove('open');
});

// Cursor flotante
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
