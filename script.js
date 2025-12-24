<script>
    const toggle = document.getElementById("menuToggle");
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
});
</script>



