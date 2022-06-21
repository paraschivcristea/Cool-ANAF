const openButton = document.querySelector(".openbtn");
openButton.addEventListener("click", () => {
document.getElementById("mySidenav").style.width = "100vw";
})

const closeButton = document.querySelector(".closebtn");
closeButton.addEventListener("click", () => {
document.getElementById("mySidenav").style.width = "0";
})

const collapseBtn = document.querySelector("#collapsebtn");
const collapseBtnClose = document.querySelector("#collapsebtnclose");

collapseBtn.addEventListener("click", () => {
    document.getElementById("collapse").style.display = "flex";
    document.getElementById("collapsebtn").scrollIntoView({behavior: "smooth", block: "center"});
    document.getElementById("collapsebtn").style.display = "none";
    document.getElementById("collapsebtnclose").style.display = "flex";
})

collapseBtnClose.addEventListener("click", () => {
    document.getElementById("collapse").style.display = "none";
    document.getElementById("collapsetitle").scrollIntoView({behavior: "smooth", block: "end"});
    document.getElementById("collapsebtnclose").style.display = "none";
    document.getElementById("collapsebtn").style.display = "flex";
})