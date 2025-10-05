// === ANIMACIONES ===
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      el.classList.add('visible');
    }
  });
});

// === PANEL PLAYLIST ===
function togglePanel(){
  const panel = document.getElementById('playlistPanel');
  panel.classList.toggle('closed');
}
