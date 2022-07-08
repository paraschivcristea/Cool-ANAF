const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#7b1fa2;";
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

window.addEventListener('scroll',(e)=>{
  const nav = document.querySelector('header');
  if(window.pageYOffset>0){
    nav.classList.add("menushadow");
  }else{
    nav.classList.remove("menushadow");
  }
});

const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});