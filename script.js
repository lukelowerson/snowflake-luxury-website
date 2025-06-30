const track = document.querySelector(".carousel-track");
const slides = track.querySelectorAll("img");
const slideCount = slides.length;
let index = 0;
let intervalId;

// Slide movement function
function moveSlide() {
  index++;
  track.style.transition = "transform 0.8s ease-in-out";
  track.style.transform = `translateX(-${index * 100}%)`;

  // If on the cloned slide, reset to the first after animation
  if (index === slideCount - 1) {
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0%)";
      index = 0;
    }, 800);
  }
}

// Start auto-play
function startCarousel() {
  intervalId = setInterval(moveSlide, 3500);
}

// Stop auto-play
function stopCarousel() {
  clearInterval(intervalId);
}

// Click to go to next slide manually
track.parentElement.addEventListener("click", () => {
  moveSlide();
});

// Start initially
startCarousel();

// Pause on hover
// track.parentElement.addEventListener("mouseenter", stopCarousel);
// track.parentElement.addEventListener("mouseleave", startCarousel);
