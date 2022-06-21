const openButton = document.querySelector(".openbtn");
openButton.addEventListener("click", () => {
document.getElementById("mySidenav").style.width = "100vw";
})

const closeButton = document.querySelector(".closebtn");
closeButton.addEventListener("click", () => {
document.getElementById("mySidenav").style.width = "0";
})

const collapseBtn = document.querySelector("#collapsebtn");
collapseBtn.addEventListener("click", () => {
    document.getElementById("collapse").style.display = "flex";
    document.getElementById("collapsebtn").scrollIntoView({behavior: "smooth", block: "center"});
})