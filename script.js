<script>
 /*   const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navMenu");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

// Toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (!menuToggle || !navMenu) {
    // Elements not found — check IDs in index.html
    console.warn('Menu toggle or nav menu element not found.');
    return;
  }

  // Toggle function
  function toggleMenu() {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuToggle.classList.toggle('open', isOpen);
    // prevent background from scrolling when menu open (optional)
    document.documentElement.classList.toggle('nav-open', isOpen);
  }

  menuToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && e.target !== menuToggle) {
      toggleMenu();
    }
  });

  // Close with Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMenu();
    }
  });
});*/

    // script.js
// Simple, accessible mobile menu toggle

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (!menuToggle || !navMenu) return;

  // Ensure initial ARIA state
  menuToggle.setAttribute('role', 'button');
  menuToggle.setAttribute('aria-controls', 'navMenu');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.tabIndex = 0;

  // Toggle handler
  function toggleMenu() {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Allow keyboard activation (Enter / Space)
  menuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
});
</script>




