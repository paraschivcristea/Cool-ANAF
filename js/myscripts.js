function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

const openButton = document.querySelector(".openbtn");
openButton.addEventListener("click", () => {
document.getElementById("mySidenav").style.width = "100vw";
document.querySelector(".sidenav").addEventListener("wheel", preventScroll);
})

const closeButton = document.querySelector(".closebtn");
closeButton.addEventListener("click", () => {
document.getElementById("mySidenav").style.width = "0";
document.querySelector(".sidenav").removeEventListener("wheel", preventScroll);
})

const collapse = document.getElementById("collapse");
const collapseBtn = document.querySelector("#collapsebtn");
const openIcon = document.querySelector("#openicon");
const closeIcon = document.querySelector("#closeicon");

collapseBtn.addEventListener('click', function () {
    if (collapse.classList.contains('hidden')) {
      collapse.classList.remove('hidden');
      openIcon.classList.add("hidden");
      openIcon.classList.add("visuallyhidden");
      closeIcon.classList.remove("hidden");
      closeIcon.classList.remove("visuallyhidden");
      document.getElementById("collapsebtn").scrollIntoView({behavior: "smooth", block: "center"});
      setTimeout(function () {
        collapse.classList.remove('visuallyhidden');
      }, 20);
    } else {
      collapse.classList.add('visuallyhidden'); 
      closeIcon.classList.add("visuallyhidden");  
      openIcon.classList.remove("visuallyhidden"); 
      closeIcon.classList.add("hidden");
      openIcon.classList.remove("hidden");
      collapse.addEventListener('transitionend', function(e) {
        collapse.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  }, false);