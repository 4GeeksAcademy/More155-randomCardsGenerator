import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = [
    { name: "heart", symbol: "♥" },
    { name: "diamond", symbol: "♦" },
    { name: "spade", symbol: "♠" },
    { name: "club", symbol: "♣" }
  ];

  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  let secondsLeft = 10;
  const countdownElement = document.getElementById("countdown");

  function drawRandomCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    
    const card = document.getElementById("card");
    const topLeft = card.querySelector(".top-left");
    const center = card.querySelector(".center");
    const bottomRight = card.querySelector(".bottom-right");

    card.classList.remove("heart", "diamond", "spade", "club");
    card.classList.add(randomSuit.name);
    
    topLeft.textContent = randomSuit.symbol;
    bottomRight.textContent = randomSuit.symbol;
    center.textContent = randomValue;

    secondsLeft = 10;
    if (countdownElement) countdownElement.textContent = secondsLeft;
  }

  function updateCountdown() {
    secondsLeft--;
    if (countdownElement) {
      countdownElement.textContent = secondsLeft;
    }
    if (secondsLeft <= 0) {
      secondsLeft = 10;
    }
  }

  setInterval(updateCountdown, 1000);
  setInterval(drawRandomCard, 10000);

  drawRandomCard();

  document.getElementById("new-card").addEventListener("click", drawRandomCard);
};