// Cursor personalizado
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Animaciones scroll
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.3 };
const observer = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.animationPlayState = 'running';
    }
  });
}, options);

faders.forEach(fader => {
  fader.style.animationPlayState = 'paused';
  observer.observe(fader);
});
