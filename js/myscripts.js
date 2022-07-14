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

const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const cardBackground = document.querySelector(".card-background-img");
const cardTitle = document.querySelector(".card-title");

card.addEventListener("mouseover", (e) => {
  cardBackground.classList.add("card-background-hover");
  cardTitle.classList.add("card-title-hover");
});

card.addEventListener("mouseout", (e) => {
  cardBackground.classList.remove("card-background-hover");
  cardTitle.classList.remove("card-title-hover");
});


