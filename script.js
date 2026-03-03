// 🎊 Confetti on load
window.onload = () => {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
  typeText();
};

// ⌨️ Typing Effect
const text = "Warning: This page contains too much love, bad jokes, and us 💙";
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 50);
  }
}

// 🌙 Dark Mode
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// 🎶 Music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
music.volume = 0.5;

musicBtn.onclick = () => {
  music.play();
  musicBtn.innerText = "🎶 Music Playing";
};

// 🎁 Final Surprise
function finalSurprise() {
  alert("I love you. Happy Birthday my girl 🎂💙 Always you.");
}
