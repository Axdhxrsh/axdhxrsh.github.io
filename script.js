const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

reveal();

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
});
// Dynamic Multi-Role Typewriter
const textElement = document.querySelector(".typewriter-text");
const words = [
  "Integrated M.Sc AI Student",
  "AI & ML Enthusiast",
  "Web Developer",
  "Tech Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
  if (!textElement) return;

  const currentWord = words[wordIndex];

  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 40; // Deletion speed
  } else {
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100; // Typing speed
  }

  // Finished typing word -> pause before deleting
  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 1800; // Hold full word
    isDeleting = true;
  } 
  // Finished deleting -> jump to next word
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 400; // Pause before new word
  }

  setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
