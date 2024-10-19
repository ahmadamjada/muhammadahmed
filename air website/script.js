const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const menuClose = document.getElementById("menu-close");

    // Show menu on hamburger click
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    // Close menu on 'close' icon click
    menuClose.addEventListener("click", () => {
        menu.classList.remove("open");
    });


