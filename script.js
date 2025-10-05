// === CURSOR ===
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// === AUDIO CONTROL ===
const audio = document.getElementById("bgAudio");
const btn = document.getElementById("audioControl");
btn.addEventListener("click",()=>{
  if(audio.paused){audio.play();btn.textContent="⏸"}
  else{audio.pause();btn.textContent="▶"}
});

// === PARTICLES ===
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const colors = ["#0ff","#f0f","#0ff","#f0f"];

class Particle{
  constructor(x,y){
    this.x=x;this.y=y;this.size=Math.random()*3+1;
    this.color=colors[Math.floor(Math.random()*colors.length)];
    this.speedX=Math.random()*1-0.5;
    this.speedY=Math.random()*1-0.5;
  }
  update(){this.x+=this.speedX;this.y+=this.speedY;if(this.size>0.2)this.size-=0.05}
  draw(){ctx.fillStyle=this.color;ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fill()}
}

function initParticles(){
  particlesArray=[];
  for(let i=0;i<100;i++){
    let x=Math.random()*canvas.width;
    let y=Math.random()*canvas.height;
    particlesArray.push(new Particle(x,y));
  }
}

function handleParticles(){
  for(let i=0;i<particlesArray.length;i++){
    particlesArray[i].update();
    particlesArray[i].draw();
    for(let j=i;j<particlesArray.length;j++){
      let dx=particlesArray[i].x-particlesArray[j].x;
      let dy=particlesArray[i].y-particlesArray[j].y;
      let dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<100){
        ctx.beginPath();
        ctx.strokeStyle="rgba(0,255,255,0.1)";
        ctx.moveTo(particlesArray[i].x,particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x,particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}
initParticles();
animate();

window.addEventListener("resize",()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;initParticles();});

// === SCROLL ANIMATION ===
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {threshold:0.3};
const appearOnScroll = new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.style.opacity=1;entry.target.style.transform="translateY(0)";observer.unobserve(entry.target)}
  });
},appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));
