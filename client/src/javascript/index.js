// adding year dynamically to footer
const footerCopy = document.getElementById("footer-copy");
const year = new Date().getFullYear();

footerCopy.innerHTML = "&copy" + year + " BLUFFING MOVIE";

// hamburger menu
const hamMenu = document.getElementById("ham-menu");

const offScreenMenu = document.getElementById("off-screen-menu");

hamMenu?.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
