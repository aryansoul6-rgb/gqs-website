console.log("Welcome to GQS!");

// Select elements
const track = document.querySelector('.carousel-track');
const items = Array.from(document.querySelectorAll('.carousel-item'));
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

// --- Calculate item width including margins ---
function getItemWidth() {
  const item = items[0];
  const styles = getComputedStyle(item);

  const width = item.getBoundingClientRect().width;
  const margin =
    parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);

  return width + margin;
}

// --- Update carousel position ---
function updateCarousel() {
  const offset = index * getItemWidth();
  track.style.transform = `translateX(-${offset}px)`;
}

// --- Button events ---
nextBtn.addEventListener('click', () => {
  if (index < items.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// --- Keep alignment when window is resized ---
window.addEventListener('resize', updateCarousel);
