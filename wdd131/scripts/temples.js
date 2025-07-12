// Toggle navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
  
    hamburger.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      hamburger.textContent = isVisible ? '☰' : '✖';
    });
  
   // getdates.js

// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = "Last Updated: " + new Date(document.lastModified).toLocaleDateString();

  });