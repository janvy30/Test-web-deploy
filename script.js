// Fade-up animation when scrolling
const fadeElements = document.querySelectorAll(".fade-up");

function revealOnScroll() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.animation = "fadeIn 1s forwards";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
