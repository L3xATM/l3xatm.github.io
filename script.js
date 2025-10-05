const playlist = document.getElementById('playlist');
const toggle = document.getElementById('togglePlaylist');
const closeP = document.getElementById('closePlaylist');
const telegramBtn = document.getElementById('telegramQuick');

toggle.addEventListener('click', () => {
  playlist.classList.toggle('open');
  // sube el botón de Telegram si se abre la playlist
  if(playlist.classList.contains('open')){
    telegramBtn.classList.add('up');
  } else {
    telegramBtn.classList.remove('up');
  }
});

closeP.addEventListener('click', () => {
  playlist.classList.remove('open');
  telegramBtn.classList.remove('up');
});
