// Partículas
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

const particles = [];
class Particle {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.radius = Math.random() * 2 + 1;
    this.dx = (Math.random() - 0.5) * 1.5;
    this.dy = (Math.random() - 0.5) * 1.5;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    if(this.x <0 || this.x>w) this.dx=-this.dx;
    if(this.y<0 || this.y>h) this.dy=-this.dy;
    this.draw();
  }
}
for(let i=0;i<150;i++) particles.push(new Particle());

function animate(){
  ctx.clearRect(0,0,w,h);
  particles.forEach(p=>p.update());
  requestAnimationFrame(animate);
}
animate();
