// JavaScript for Mobile Menu Toggle
  
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // JavaScript for Mobile Menu Toggle end

// JavaScript for Slider

  const slider = document.getElementById('slider');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  let currentSlide = 0;
  const totalSlides = slider.children.length;

  // Function to update the slider's position
  function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Next Button Event
  next.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSliderPosition();
  });

  // Previous Button Event
  prev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
  });

  // Auto-Slide every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSliderPosition();
  }, 5000);

  // JavaScript for Slider end



//   JavaScript for menu Tabs start
  const biryaniTab = document.getElementById('biryaniTab');
  const bbqTab = document.getElementById('bbqTab');
  const pizzaTab = document.getElementById('pizzaTab');

  const biryaniSection = document.getElementById('biryaniSection');
  const bbqSection = document.getElementById('bbqSection');
  const pizzaSection = document.getElementById('pizzaSection');

  function hideAllSections() {
    biryaniSection.classList.add('hidden');
    bbqSection.classList.add('hidden');
    pizzaSection.classList.add('hidden');
  }

  biryaniTab.addEventListener('click', () => {
    hideAllSections();
    biryaniSection.classList.remove('hidden');
  });

  bbqTab.addEventListener('click', () => {
    hideAllSections();
    bbqSection.classList.remove('hidden');
  });

  pizzaTab.addEventListener('click', () => {
    hideAllSections();
    pizzaSection.classList.remove('hidden');
  });

  //   JavaScript for menu Tabs start
