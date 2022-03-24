const listItems = document.querySelectorAll("nav ul li");
const toggleButton = document.querySelector("main .topbar .toggle");
const sidebar = document.querySelector("nav");
const main = document.querySelector("main");

window.onload = function () {
  listItems[1].classList.add("clicked");
};

// list.forEach((item) => item.addEventListener("mouseover", addHover));
listItems.forEach((item) => item.addEventListener("click", addHover));
toggleButton.addEventListener("click", toggleSidebar);

function toggleSidebar() {
  sidebar.classList.toggle("open");
  main.classList.toggle("expansion");
}
function addHover() {
  listItems.forEach((item) => item.classList.remove("clicked"));
  this.classList.add("clicked");
}
