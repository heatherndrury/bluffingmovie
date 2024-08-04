// adding year dynamically to footer
const footerCopy = document.getElementById("footer-copy");
const year = new Date().getFullYear();

footerCopy.innerHTML = "&copy" + year + " BLUFFING MOVIE";

// hamburger menu
const hamMenu = document.getElementById("ham-menu");

const offScreenMenu = document.getElementById("off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});












// removing autoplay on video with Observer

// const videoPlayer = document.getElementById("player");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         videoPlayer.play();
//       } else {
//         videoPlayer.pause();
//       }
//     });
//   },
//   {
//     root: null, 
//     rootMargin: "0px", 
//     threshold: 0.5, 
//   }
// );
// observer.observe(videoPlayer);
