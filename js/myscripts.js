const openButton = document.querySelector(".openbtn");
openButton.addEventListener("click", () => {
document.getElementById("mySidenav").style.width = "100vw";
})

const closeButton = document.querySelector(".closebtn");
closeButton.addEventListener("click", () => {
document.getElementById("mySidenav").style.width = "0";
})

ScrollReveal().reveal(".border");
ScrollReveal().reveal(".title");
ScrollReveal().reveal(".helper", {delay: 300});
ScrollReveal().reveal(".row", {delay: 400});