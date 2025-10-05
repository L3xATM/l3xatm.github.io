// Cursor
const cursor=document.getElementById("cursor");
document.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px";});

// Audio
const bgAudio=document.getElementById("bgAudio");
const audioControl=document.getElementById("audioControl");
audioControl.addEventListener("click",()=>{
  if(bgAudio.paused){bgAudio.play();audioControl.textContent="⏸";}
  else{bgAudio.pause();audioControl.textContent="▶";}
});

// Playlist
const panel=document.getElementById("playlist");
const toggleBtn=document.getElementById("togglePlaylist");
const closeBtn=document.getElementById("closePlaylist");
toggleBtn.addEventListener("click",()=>{panel.classList.add("open");panel.classList.remove("closed");});
closeBtn.addEventListener("click",()=>{panel.classList.remove("open");panel.classList.add("closed");});
