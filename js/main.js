// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
});