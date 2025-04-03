var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){ 
  crsr.style.left= dets.x+"px"
  crsr.style.top= dets.y+"px"
  blur.style.left= dets.x-150+"px"
  blur.style.top= dets.y-150+"px"
})