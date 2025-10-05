const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const particles = [];
const numParticles = 80;
let mouse = {x:null,y:null};

class Particle {
  constructor(){
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.size = Math.random()*3 + 1;
    this.speedX = Math.random()*1.5 - 0.75;
    this.speedY = Math.random()*1.5 - 0.75;
    this.color = `rgba(0,255,255,${Math.random()*0.5 + 0.2})`;
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x<0||this.x>w) this.speedX*=-1;
    if(this.y<0||this.y>h) this.speedY*=-1;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fillStyle=this.color;
    ctx.fill();
  }
}

for(let i=0;i<numParticles;i++) particles.push(new Particle());

function connectParticles(){
  for(let a=0;a<particles.length;a++){
    for(let b=a;b<particles.length;b++){
      let dx = particles[a].x - particles[b].x;
      let dy = particles[a].y - particles[b].y;
      let distance = Math.sqrt(dx*dx + dy*dy);
      if(distance<100){
        ctx.beginPath();
        ctx.strokeStyle=`rgba(0,255,255,${1-distance/100})`;
        ctx.lineWidth=1;
        ctx.moveTo(particles[a].x,particles[a].y);
        ctx.lineTo(particles[b].x,particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function animate(){
  ctx.clearRect(0,0,w,h);

  // Fondo neon gradiente
  let gradient = ctx.createLinearGradient(0,0,w,h);
  gradient.addColorStop(0, `hsl(${(Date.now()/50)%360}, 100%, 10%)`);
  gradient.addColorStop(1, `hsl(${(Date.now()/50+60)%360}, 100%, 20%)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,w,h);

  particles.forEach(p=>{p.update();p.draw();});
  connectParticles();
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', ()=>{
  w=canvas.width=window.innerWidth;
  h=canvas.height=window.innerHeight;
});

window.addEventListener('mousemove', (e)=>{
  mouse.x = e.x;
  mouse.y = e.y;
});
