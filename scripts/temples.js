// getdates.js

document.addEventListener('DOMContentLoaded', () => {
  // Toggle navigation menu
  const hamburger = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    const isVisible = navMenu.classList.contains('open');
    navMenu.classList.toggle('open');
    hamburger.textContent = isVisible ? '☰' : '✖';
  });

  // Set current year
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Set last modified date
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = "Last Updated: " + new Date(document.lastModified).toLocaleDateString();
  }
});
