<script>
// Mobile menu toggle and link handling
// - Toggles the #navMenu open/closed
// - When a nav link is clicked the menu closes but navigation proceeds normally

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (!menuToggle || !navMenu) return;

  // Toggle mobile menu
  menuToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    // Optional: add body class to prevent scrolling when menu open
    document.body.classList.toggle('menu-open', isOpen);
  });

  // Close menu when a link is clicked (allow navigation to proceed)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
      // Close the mobile menu so the next page loads with menu closed
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
      // IMPORTANT: do not call event.preventDefault() here — let the anchor navigate
    });
  });

  // Optional: close menu on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
  });    

</script>






