// Cursor personalizado
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e=>{
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Partículas
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
class Particle{
  constructor(x,y){
    this.x=x; this.y=y;
    this.size=Math.random()*3+1;
    this.speedX=(Math.random()-0.5)*2;
    this.speedY=(Math.random()-0.5)*2;
    this.color='#0ff';
  }
  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;
    if(this.x<0 || this.x>canvas.width) this.speedX*=-1;
    if(this.y<0 || this.y>canvas.height) this.speedY*=-1;
  }
  draw(){ ctx.fillStyle=this.color; ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fill(); }
}
function initParticles(){ particlesArray=[]; for(let i=0;i<100;i++){ particlesArray.push(new Particle(Math.random()*canvas.width,Math.random()*canvas.height)); } }
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p=>{ p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
window.addEventListener('resize', ()=>{ canvas.width=window.innerWidth; canvas.height=window.innerHeight; initParticles(); });
initParticles(); animate();
