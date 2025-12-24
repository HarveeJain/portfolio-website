document.addEventListener("DOMContentLoaded", () => {
  const bubbleGame = document.getElementById("bubble-game");

  function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const size = Math.floor(Math.random() * 20) + 15;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  bubble.style.left = `${Math.random() * 90}%`;
  bubble.style.bottom = "-40px";

  bubble.addEventListener("click", () => bubble.remove());

  bubbleGame.appendChild(bubble);
  setTimeout(() => bubble.remove(), 6000);
}

  setInterval(createBubble, 1500);
});
