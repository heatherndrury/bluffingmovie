// adding year dynamically to footer
const footerCopy = document.getElementById("footer-copy");
const year = new Date().getFullYear();

footerCopy.innerHTML = "&copy" + year + " BLUFFING MOVIE";

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
