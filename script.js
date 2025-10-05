/* ===== script.js — shared across pages ===== */

/* DOM helpers */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

/* ---------- Preloader / Reveal (if any preloader added later) ---------- */
/* (Pages here don't include a separate preloader element; if you add one, hide it on load) */

/* ---------- Particles canvas (interactive) ---------- */
(function particlesInit(){
const canvas = $('#particles');
if(!canvas) return;
const ctx = canvas.getContext('2d');
let w = canvas.width = innerWidth;
let h = canvas.height = innerHeight;

const particles = [];
const TARGET = Math.max(24, Math.floor((w*h)/90000));
for(let i=0;i<TARGET;i++){
particles.push({
x: Math.random()*w,
y: Math.random()*h,
r: Math.random()*3+0.6,
vx: (Math.random()-0.5)*0.4,
vy: (Math.random()-0.5)*0.4,
alpha: Math.random()*0.5+0.08
});
}
const mouse = { x:w/2, y:h/2, active:false };

function resize(){ w=canvas.width=innerWidth; h=canvas.height=innerHeight; }
window.addEventListener('resize', resize);

window.addEventListener('mousemove', e => {
mouse.x = e.clientX; mouse.y = e.clientY;
});

document.addEventListener('mouseover', e => {
if(e.target.closest('a,button,.badge,.network-btn')) mouse.active = true;
});
document.addEventListener('mouseout', e => {
if(e.target.closest('a,button,.badge,.network-btn')) mouse.active = false;
});

function draw(){
ctx.clearRect(0,0,w,h);
for(const p of particles){
const dx = p.x - mouse.x;
const dy = p.y - mouse.y;
const dist = Math.sqrt(dx*dx+dy*dy);
if(mouse.active && dist < 180){
p.vx += (dx/dist)*0.02;
p.vy += (dy/dist)*0.02;
}
p.x += p.vx;
p.y += p.vy;
if(p.x < -10) p.x = w+10;
if(p.x > w+10) p.x = -10;
if(p.y < -10) p.y = h+10;
if(p.y > h+10) p.y = -10;

```
  ctx.beginPath();
  ctx.fillStyle = `rgba(155,77,255,${p.alpha})`;
  ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
  ctx.fill();
}
requestAnimationFrame(draw);
```

}
draw();
})();

/* ---------- Fade-in on scroll ---------- */
(function fadeOnScroll(){
const faders = $$('.fade-in');
const io = new IntersectionObserver((entries, obs) => {
entries.forEach(entry => {
if(entry.isIntersecting){ entry.target.classList.add('visible'); obs.unobserve(entry.target); }
});
}, { threshold: 0.08 });
faders.forEach(f => io.observe(f));
})();

/* ---------- Custom cursor ---------- */
(function cursor(){
const cur = $('#cursor');
if(!cur) return;
let mx = innerWidth/2, my = innerHeight/2;
window.addEventListener('mousemove', e => {
mx = e.clientX; my = e.clientY;
cur.style.left = mx + 'px';
cur.style.top = my + 'px';
});

const interact = ['a','button','.badge','.btn','.network-btn','input','textarea'];
interact.forEach(sel=>{
document.addEventListener('mouseover', e=>{
if(e.target.closest(sel)) cur.classList.add('big');
});
document.addEventListener('mouseout', e=>{
if(e.target.closest(sel)) cur.classList.remove('big');
});
});
})();

/* ---------- Playlist panel toggle ---------- */
(function playlistToggle(){
const playlist = $('#playlist');
const toggle = $('#togglePlaylist');
const close = $('#closePlaylist');
if(!playlist || !toggle) return;
toggle.addEventListener('click', ()=> playlist.classList.toggle('closed'));
if(close) close.addEventListener('click', ()=> playlist.classList.add('closed'));
// default closed on load
playlist.classList.add('closed');
})();

/* ---------- Site-wide audio control ---------- */
(function audioControl(){
const audio = $('#bgAudio');
const ctrl = $('#audioControl');
if(!audio || !ctrl) return;

// start muted — browsers often block audible autoplay
audio.muted = true;
audio.volume = 0.28;

let playing = false;
ctrl.addEventListener('click', async () => {
try {
if(!playing){
await audio.play();
audio.muted = false;
ctrl.textContent = '⏸';
playing = true;
} else {
audio.pause();
ctrl.textContent = '▶';
playing = false;
}
} catch (err){
// user gesture required — set visual state
ctrl.textContent = '▶';
console.warn('Playback blocked until user interacts with the page.', err);
}
});

// if user interacts anywhere, and audio was muted but should be playing, try to unmute
window.addEventListener('click', ()=> {
if(!audio.paused && audio.muted){
try{ audio.muted = false; }catch(e){}
}
});
})();

/* ---------- Smooth nav behavior for SPA feel ---------- */
(function navSmooth(){

$$('.nav-links a').forEach(a=>{
a.addEventListener('click', ()=> document.documentElement.style.scrollBehavior = 'smooth');
});
})();

/* ---------- small accessibility helpers ---------- */
/* ensure external links open new tab by target attr (already in html templates) */

/* End of script.js */

$$
