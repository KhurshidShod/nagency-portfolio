let video = document.getElementById("worksVideo");
let playWorksVideo = document.getElementById("playWorksVideo");
let cursor = document.getElementById("cursor")

video.addEventListener("click", () => {
    if(video.paused){
        video.play();
        playWorksVideo.style.display = 'none';
    } else {
        video.pause();
        playWorksVideo.style.display = 'flex';
    }
})
window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      backtop.style.bottom = "50px";
    } else {
      backtop.style.bottom = "-50px";
    }
  }
  
  
  document.getElementById("navbar-open").addEventListener("click", () => {
    document.getElementById("nav_list").style.top = "0%";
    document.body.classList.add("noScroll");
  })
  document.querySelectorAll("#nav_list li").forEach(li => {
    li.addEventListener("click", () => {
      document.getElementById("nav_list").style.top = "-100%";
      document.body.classList.remove("noScroll");
    })
  })
  document.getElementById("navbar-close").addEventListener("click", () => {
    document.getElementById("nav_list").style.top = "-100%";
    document.body.classList.remove("noScroll");
  })
  window.addEventListener("load", () => {
    document.getElementById("loading").style.display = "none"
  })

