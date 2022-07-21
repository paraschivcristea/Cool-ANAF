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
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const cardBackground = document.querySelector(".card-background-img");
const cardBackground2 = document.querySelector(".card-background-img2");
const cardBackground3 = document.querySelector(".card-background-img3");
const cardBackground4 = document.querySelector(".card-background-img4");
const cardTitle = document.querySelector(".card-title");
const cardTitle2 = document.querySelector(".card-title2");
const cardTitle3 = document.querySelector(".card-title3");
const cardTitle4 = document.querySelector(".card-title4");

card.addEventListener("mouseover", (e) => {
  cardBackground.classList.add("card-background-hover");
  cardTitle.classList.add("card-title-hover");
});

card2.addEventListener("mouseover", (e) => {
  cardBackground2.classList.add("card-background-hover");
  cardTitle2.classList.add("card-title-hover");
});

card3.addEventListener("mouseover", (e) => {
  cardBackground3.classList.add("card-background-hover");
  cardTitle3.classList.add("card-title-hover");
});

card4.addEventListener("mouseover", (e) => {
  cardBackground4.classList.add("card-background-hover");
  cardTitle4.classList.add("card-title-hover");
});

card.addEventListener("mouseout", (e) => {
  cardBackground.classList.remove("card-background-hover");
  cardTitle.classList.remove("card-title-hover");
});

card2.addEventListener("mouseout", (e) => {
  cardBackground2.classList.remove("card-background-hover");
  cardTitle2.classList.remove("card-title-hover");
});

card3.addEventListener("mouseout", (e) => {
  cardBackground3.classList.remove("card-background-hover");
  cardTitle3.classList.remove("card-title-hover");
});

card4.addEventListener("mouseout", (e) => {
  cardBackground4.classList.remove("card-background-hover");
  cardTitle4.classList.remove("card-title-hover");
});

const ACTIVE_CLASS = "block--active";
const TRANSITION_CLASS = "block--transition";

const getTransforms = (a, b) => {
  const scaleY = a.height / b.height;
  const scaleX = a.width / b.width;

  // dividing by 2 centers the transform since the origin
  // is centered not top left
  const translateX = a.left + a.width / 2 - (b.left + b.width / 2);
  const translateY = a.top + a.height / 2 - (b.top + b.height / 2);

  // nothing particularly clever here, just using the
  // translate amount to estimate a rotation direction/amount.
  // ends up feeling pretty natural to me.
  const rotate = translateX;

  return [
    `translateX(${translateX}px)`,
    `translateY(${translateY}px)`,
    `rotate(${rotate}deg)`,
    `scaleY(${scaleY})`,
    `scaleX(${scaleX})`
  ].join(" ");
};

const animate = (block, transforms, oldTransforms) => {
  block.style.transform = transforms;
  block.getBoundingClientRect(); // force redraw
  block.classList.add(TRANSITION_CLASS);
  block.style.transform = oldTransforms;
  block.addEventListener(
    "transitionend",
    () => {
      block.removeAttribute("style");
    },
    { once: true }
  );
};

[...document.querySelectorAll(".block")].forEach(block => {
  const buttonForBlock = block.querySelector(".block-content__button");
  block.addEventListener("click", event => {
    if (
      block.classList.contains(ACTIVE_CLASS) &&
      event.target !== buttonForBlock
    ) {
      return;
    }

    block.classList.remove(TRANSITION_CLASS);
    const inactiveRect = block.getBoundingClientRect();
    const oldTransforms = block.style.transform;

    block.classList.toggle(ACTIVE_CLASS);
    const activeRect = block.getBoundingClientRect();
    const transforms = getTransforms(inactiveRect, activeRect);

    animate(block, transforms, oldTransforms);
  });
});
