

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
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
});
window.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewCount");
  
    if (!reviewCount) {
      reviewCount = 1;
    } else {
      reviewCount = parseInt(reviewCount) + 1;
    }
  
    localStorage.setItem("reviewCount", reviewCount);
  
    const counter = document.getElementById("reviewCount");
    if (counter) {
      counter.textContent = reviewCount;
    }
  });
  