// Typing animation
const texts = ["Web Developer", "UI Designer", "Freelancer"];
let count = 0, index = 0, currentText = '', letter = '';
(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typing-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 150);
  }
})();

// Toggle Nav Menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Scroll to top button
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
