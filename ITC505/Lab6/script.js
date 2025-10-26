// Coin toss logic
document.getElementById("flipButton").addEventListener("click", function() {
  let resultText = document.getElementById("resultText");
  let coinImage = document.getElementById("coinImage");

  let result = Math.random() < 0.5 ? "Heads" : "Tails";

  // Animate coin flip
  coinImage.style.transform = "rotateY(720deg)";
  setTimeout(() => {
    coinImage.style.transform = "rotateY(0deg)";

    if (result === "Heads") {
      coinImage.src = "https://upload.wikimedia.org/wikipedia/commons/1/1e/US_One_Cent_Obv_2010.jpg";
    } else {
      coinImage.src = "https://upload.wikimedia.org/wikipedia/commons/d/d6/US_One_Cent_Rev_2010.jpg";
    }

    resultText.textContent = "Result: " + result + "!";
  }, 500);
});

// Show last updated date
document.getElementById("date").textContent = new Date().toLocaleDateString();
