// =======================
// CURSOR PERSONALIZADO
// =======================
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// =======================
// AUDIO
// =======================
const bgAudio = document.getElementById('bgAudio');
const audioControl = document.getElementById('audioControl');
let playing = false;

audioControl.addEventListener('click', () => {
  if(playing){ bgAudio.pause(); audioControl.textContent='▶'; playing=false;}
  else{ bgAudio.play(); audioControl.textContent='⏸'; playing=true;}
});

// =======================
// PANEL PLAYLIST
// =======================
const togglePlaylist = document.getElementById('togglePlaylist');
const closePlaylist = document.getElementById('closePlaylist');
const playlistPanel = document.getElementById('playlist');

togglePlaylist.addEventListener('click', ()=> playlistPanel.classList.toggle('open'));
closePlaylist.addEventListener('click', ()=> playlistPanel.classList.remove('open'));

// =======================
// PARTICULAS
// =======================
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
let particlesArray = [];

class Particle {
  constructor(){
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.size = Math.random()*2+1;
    this.speedX = Math.random()*1-0.5;
    this.speedY = Math.random()*1-0.5;
  }
  update(){ this.x += this.speedX; this.y += this.speedY; if(this.x> w) this.x=0; if(this.x<0) this.x=w; if(this.y>h) this.y=0; if(this.y<0) this.y=h; }
  draw(){ ctx.fillStyle='rgba(255,255,255,0.6)'; ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fill(); }
}

function initParticles(){ particlesArray=[]; for(let i=0;i<120;i++){ particlesArray.push(new Particle()); } }
function animate(){
  ctx.clearRect(0,0,w,h);
  particlesArray.forEach(p=>{ p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
window.addEventListener('resize', ()=>{ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; initParticles(); });

initParticles();
animate();
