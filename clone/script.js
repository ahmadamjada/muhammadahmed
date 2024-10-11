// JavaScript to toggle mobile menu
// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
  // JavaScript to toggle mobile menu



// hero slider start

let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

// Show initial slide
showSlides(slideIndex);

// Automatically change slides every 7 seconds
let slideInterval = setInterval(() => {
    nextSlide();
}, 7000);

// Show the slide based on the index
function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("bg-gray-800");
    }

    // Show the current slide and highlight the dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("bg-gray-800");
}

// Go to the next slide
function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
    resetSlideTimer();
}

// Go to the previous slide
function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
    resetSlideTimer();
}

// Go to a specific slide
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides(slideIndex);
    resetSlideTimer();
}

// Reset the timer for the slide interval when navigating manually
function resetSlideTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        nextSlide();
    }, 7000);
}

