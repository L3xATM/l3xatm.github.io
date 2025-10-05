// Audio
const bgAudio = document.getElementById('bgAudio');
const audioControl = document.getElementById('audioControl');
audioControl.addEventListener('click',()=> {
  if(bgAudio.paused){ bgAudio.play(); audioControl.textContent='⏸'; }
  else{ bgAudio.pause(); audioControl.textContent='▶'; }
});

// Playlist
const playlist = document.getElementById('playlist');
document.getElementById('togglePlaylist').onclick = ()=> playlist.classList.add('open');
document.getElementById('closePlaylist').onclick = ()=> playlist.classList.remove('open');

// Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => { cursor.style.left=e.clientX+'px'; cursor.style.top=e.clientY+'px'; });

// Particles
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let w,h,particles=[];
function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; }
window.addEventListener('resize',resize);
resize();
for(let i=0;i<80;i++){ particles.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*3+1,dx:(Math.random()-0.5)*1.5,dy:(Math.random()-0.5)*1.5}); }
function draw(){ ctx.clearRect(0,0,w,h); particles.forEach(p=>{ ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='#00f6ff'; ctx.fill(); p.x+=p.dx; p.y+=p.dy; if(p.x<0||p.x>w)p.dx*=-1; if(p.y<0||p.y>h)p.dy*=-1; }); requestAnimationFrame(draw); }
draw();
