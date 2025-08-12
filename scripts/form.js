const products = [
  { id: "fc-1888", name: "flux capacitor" },
  { id: "fc-2050", name: "power laces" },
  { id: "fs-1987", name: "time circuits" },
  { id: "ac-2000", name: "low voltage reactor" },
  { id: "jj-1969", name: "warp equalizer" }
];

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
  if (select) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });

    const lastMod = document.getElementById("lastModified");
    if (lastMod) {
      lastMod.textContent = document.lastModified;
    }

    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", () => {
        // Increment review count only when form is submitted
        let reviewCount = localStorage.getItem("reviewCount");
        if (!reviewCount) {
          reviewCount = 1;
        } else {
          reviewCount = parseInt(reviewCount) + 1;
        }
        localStorage.setItem("reviewCount", reviewCount);
      });
    }
  }

  const counter = document.getElementById("reviewCount");
  if (counter) {
    // Just read and display count on confirmation page
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    counter.textContent = reviewCount;
  }
});
