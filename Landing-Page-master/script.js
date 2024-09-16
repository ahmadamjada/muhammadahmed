window.addEventListener('scroll', () => {
    const sectionToAnimate = document.querySelector('.section-to-animate');
    const sectionTop = sectionToAnimate.offsetTop;
    const windowHeight = window.innerHeight;
  
    if (window.scrollY >= sectionTop - windowHeight / 2) {
      sectionToAnimate.classList.add('animate-show');
    }
  });