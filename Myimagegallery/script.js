let images = document.querySelectorAll(".item");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
images.forEach(img=>{
  img.addEventListener("click",()=>{
    lightbox.style.display="flex";
    lightboxImg.src = img.src;
  });
});
function closeBox(){
  lightbox.style.display="none";
}
function filter(category){
  images.forEach(img=>{
    if(category === "all"){
      img.style.display="block";
    }
    else{
      img.style.display = img.classList.contains(category) ? "block" : "none";
    }
  });
}
document.addEventListener("keydown",(e)=>{
  if(e.key === "Escape") closeBox();
});