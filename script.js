 // Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];

    // Toggle menu open/close
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", (e) => {
            e.preventDefault();
            navMenu.classList.toggle("active");
            // Move focus into the menu for accessibility when opening
            if (navMenu.classList.contains("active")) {
                const firstLink = navMenu.querySelector("a");
                if (firstLink) firstLink.focus();
            }
        });

        // also allow touch events on some mobile browsers
        menuToggle.addEventListener("touchend", (e) => {
            e.preventDefault();
            navMenu.classList.toggle("active");
        });
    }

    // Close menu when a link is clicked (mobile friendly)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu) navMenu.classList.remove("active");
        });
    });

    // Close menu when pressing Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navMenu && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            if (menuToggle) menuToggle.focus();
        }
    });
});   








