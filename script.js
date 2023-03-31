var search = document.getElementById("search");
var form = document.getElementById("form");
search.onclick = function(){
    form.classList.toggle("A");
}

var hamburger = document.getElementById("hamburger");
var cross = document.getElementById("close");
var nav = document.getElementById("nav-3");
var overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
overlay.style.zIndex = "1";
overlay.style.display = "none";
document.body.appendChild(overlay);

hamburger.onclick = function(){
    nav.style.transform = "translateX(0%)";
    overlay.style.display = "block";
    nav.style.zIndex = "2";
    document.body.style.overflow = "hidden";
}
cross.onclick = function(){
    nav.style.transform = "translateX(-100%)";
    overlay.style.display = "none";
    nav.style.zIndex = "1";
    document.body.style.overflow = "auto";

}

var mySwiper = new Swiper(".swiper", {
    slidesPerView: 1, 
    breakpoints: {
        580:{
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3, 
          },
          1200: {
            slidesPerView: 4, 
          },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, 
    },
});


















