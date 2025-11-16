console.log("Welcome to GQS!");

// ⭐ Product list — Add or remove products here
const products = [
  { name: "Product Name 1", img: "GQS Images/product1.jpg" },
  { name: "Product Name 2", img: "GQS Images/product2.jpg" },
  { name: "Product Name 3", img: "GQS Images/product3.jpg" },
  { name: "Product Name 4", img: "GQS Images/product4.jpg" }
];

const track = document.getElementById("carouselTrack");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

// --- Render product cards dynamically ---
function renderProducts() {
  track.innerHTML = "";
  products.forEach(p => {
    track.innerHTML += `
      <div class="carousel-item">
        <img src="${p.img}" alt="${p.name}">
        <p>${p.name}</p>
      </div>
    `;
  });
}

renderProducts();

// Helper: always get current items
function getItems() {
  return Array.from(document.querySelectorAll(".carousel-item"));
}

// Width including margin
function getItemWidth() {
  const item = getItems()[0];
  if (!item) return 0;

  const styles = getComputedStyle(item);
  return (
    item.getBoundingClientRect().width +
    parseFloat(styles.marginLeft) +
    parseFloat(styles.marginRight)
  );
}

function updateCarousel() {
  const items = getItems();
  const maxIndex = items.length - 1;

  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;

  track.style.transform = `translateX(-${index * getItemWidth()}px)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index--;
  updateCarousel();
});

// Keep alignment correct during resize
window.addEventListener("resize", updateCarousel);

// Initial position
updateCarousel();
