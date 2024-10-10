let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  function showSlides() {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentIndex ? 'block' : 'none';
      dots[index].classList.toggle('active', index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlides();
  }

  showSlides(); // Initial display
  setInterval(nextSlide, 10000); // Change slide every 3 seconds