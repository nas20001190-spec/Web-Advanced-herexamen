import { openModal } from "./modal.js";
import { isFavorite, toggleFavorite } from "./storage.js";

export function renderAgents(agents) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  agents.forEach((agent) => {
    const card = document.createElement("div");
    card.classList.add("agent-card", "reveal");

    card.innerHTML = `
      <button class="favorite-btn ${isFavorite(agent.uuid) ? "active" : ""}">♥</button>
      <span class="agent-role">${agent.role ? agent.role.displayName : "Unknown"}</span>
      <img src="${agent.displayIcon}" alt="${agent.displayName}">
      <h3>${agent.displayName}</h3>
    `;

    const favoriteBtn = card.querySelector(".favorite-btn");
    favoriteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(agent.uuid);
      favoriteBtn.classList.toggle("active");
    });

    card.addEventListener("click", () => openModal(agent));
    app.appendChild(card);
  });

  observeCards();
}

function observeCards() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".agent-card.reveal").forEach((card) => {
    observer.observe(card);
  });
}