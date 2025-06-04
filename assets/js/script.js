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

const text1 = "Olá, eu sou o Pedro,";
const text2 = "Desenvolvedor Web.";
const h1 = document.getElementById("typing-1");
const h2 = document.getElementById("typing-2");

let i = 0;
let j = 0;

function createPlaceholder(text) {
  return text.replace(/./g, "\u00A0");
}

h1.textContent = createPlaceholder(text1);
h2.textContent = createPlaceholder(text2);

function typeFirst() {
  if (i < text1.length) {
    h1.textContent =
      text1.substring(0, i + 1) + createPlaceholder(text1.substring(i + 1));
    h1.classList.add("typing");
    i++;
    setTimeout(typeFirst, 100);
  } else {
    h1.classList.remove("typing");
    typeSecond();
  }
}

function typeSecond() {
  if (j < text2.length) {
    h2.textContent =
      text2.substring(0, j + 1) + createPlaceholder(text2.substring(j + 1));
    h2.classList.add("typing");
    j++;
    setTimeout(typeSecond, 100);
  } else {
    h2.classList.remove("typing");
  }
}

window.onload = typeFirst;
