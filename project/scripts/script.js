const homepageImages = [
    { src: "images/bride-and-groom-on-steps (2).jpg", alt: "Bride and groom on steps", caption: "Wedding Day Elegance", category: "wedding" },
    { src: "images/business-woman-with-wool-hat.jpg", alt: "Outdoor portrait of a business woman", caption: "Golden Hour Portrait", category: "portrait" },
    { src: "images/family-christmas-morning-fun.jpg", alt: "Family having fun on Christmas morning", caption: "Outdoor Family Session", category: "portrait" },
    { src: "images/family-photo.jpg", alt: "Emotional family photo at a wedding", caption: "Emotional Ceremony", category: "wedding" },
    { src: "images/golden-sunrise-over-tree-lined-hills.jpg", alt: "Golden sunrise over tree-lined hills", caption: "Golden Sunrise Landscape", category: "portrait" },
    { src: "images/pink-fur-fabulous-fashion.jpg", alt: "Fashion portrait with pink fur", caption: "Modern Fashion Shoot", category: "portrait" },
    { src: "images/shy-couple-kisses-behind-balloons.jpg", alt: "Shy couple kissing behind balloons", caption: "Playful Engagement Shoot", category: "wedding" },
    { src: "images/sunset-silhouettes-a-bride-and-groom-facing-each-other.jpg", alt: "Sunset silhouette of a bride and groom", caption: "Sunset Romance", category: "wedding" },
    { src: "images/wedding-bouquet-with-bride.jpg", alt: "Bride with a wedding bouquet", caption: "Bridal Bouquet", category: "wedding" },
    { src: "images/woman-watching-beach-sunrise.jpg", alt: "Woman watching a beach sunrise", caption: "Reflective Sunrise Moment", category: "portrait" }
  ];
  
  const homepageGalleryContainer = document.querySelector("#homepage-gallery");
  
  function renderHomepageImages(imagesArray) {
    homepageGalleryContainer.innerHTML = imagesArray.map(image => `
      <figure>
        <img src="${image.src}" alt="${image.alt}" loading="lazy" />
        <figcaption>${image.caption}</figcaption>
      </figure>
    `).join('');
  }
  
  function handleHomepageFilter(event) {
    event.preventDefault();
    const selectedCategory = event.target.dataset.category;
  
    // Set active class
    document.querySelectorAll('.filter-nav a').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  
    // Store filter in localStorage
    localStorage.setItem('homepageFilter', selectedCategory);
  
    // Filter images
    const filteredImages = selectedCategory === 'all'
      ? homepageImages
      : homepageImages.filter(img => img.category === selectedCategory);
  
    renderHomepageImages(filteredImages);
  }
  
  // Set up event listeners
  document.querySelectorAll('.filter-nav a').forEach(link => {
    link.addEventListener('click', handleHomepageFilter);
  });
  
  // On page load, apply last saved filter or 'all'
  const lastHomepageFilter = localStorage.getItem('homepageFilter') || 'all';
  const defaultLink = document.querySelector(`.filter-nav a[data-category="${lastHomepageFilter}"]`);
  if (defaultLink) defaultLink.click();
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
  
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  });
// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = "Last Updated: " + new Date(document.lastModified).toLocaleDateString();
