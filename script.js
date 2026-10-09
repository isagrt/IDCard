const card = document.getElementById("business-card");
const flipButton = document.getElementById("flip-button");

function flipCard() {
  const flipped = card.classList.toggle("is-flipped");
  card.setAttribute("aria-pressed", String(flipped));
  card.setAttribute(
    "aria-label",
    flipped
      ? "Verso do cartão. Clique para voltar à frente."
      : "Frente do cartão. Clique para virar para o verso."
  );
}

card.addEventListener("click", (event) => {
  // Links and buttons should work normally without flipping the card.
  if (event.target.closest("a, button, input, select, textarea, [data-no-flip]")) return;
  flipCard();
});

card.addEventListener("keydown", (event) => {
  if (event.target !== card) return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    flipCard();
  }
});

flipButton.addEventListener("click", flipCard);

// Portfolio is intentionally not linked until a real URL is added.
// Set your URL here when your portfolio is ready.
const portfolioUrl = ""; // Example format: "https://seusite.com"
const portfolioLink = document.getElementById("portfolio-link");
const portfolioLabel = document.getElementById("portfolio-label");

if (portfolioUrl.trim()) {
  portfolioLink.href = portfolioUrl;
  portfolioLabel.textContent = new URL(portfolioUrl).hostname.replace(/^www\./, "");
} else {
  portfolioLink.removeAttribute("href");
  portfolioLink.removeAttribute("target");
  portfolioLink.setAttribute("aria-disabled", "true");
  portfolioLabel.textContent = "Link em breve";
  portfolioLink.style.opacity = ".8";
}
