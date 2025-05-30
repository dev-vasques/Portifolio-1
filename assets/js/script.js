const link = document.getElementById("about-link");
const arrow = document.getElementById("arrow-icon");

const slides = document.getElementById("about-img img");
let current = 0;

link.addEventListener("mouseenter", () => {
  arrow.style.opacity = "1";
  arrow.style.transform = "translateX(5px)";
  arrow.style.color = "var(--color5)";
});

link.addEventListener("mouseleave", () => {
  arrow.style.opacity = "0";
  arrow.style.transform = "translateX(0)";
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".about-img img");
  let current = 0;

  slides.forEach((img, i) => {
    img.style.opacity = i === 0 ? "1" : "0";
    img.style.transition = "opacity 1s ease-in-out";
    img.style.zIndex = i === 0 ? "1" : "0";
  });

  setInterval(() => {
    slides[current].style.opacity = "0";
    slides[current].style.zIndex = "0";

    current = (current + 1) % slides.length;
    slides[current].style.opacity = "1";
    slides[current].style.zIndex = "1";
  }, 2500);
});
