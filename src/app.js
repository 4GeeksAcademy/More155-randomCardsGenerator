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

  const cardElement = document.getElementById("card");

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
  
  function updateCardSize() {
    const widthInput = document.getElementById("card-width").value;
    const heightInput = document.getElementById("card-height").value;

    const newWidth = parseInt(widthInput) || 200;
    const newHeight = parseInt(heightInput) || 300;

    cardElement.style.width = newWidth + "px";
    cardElement.style.height = newHeight + "px";

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
  updateCardSize();

  document.getElementById("new-card").addEventListener("click", drawRandomCard);
  document.getElementById("apply-size").addEventListener("click", updateCardSize);

};