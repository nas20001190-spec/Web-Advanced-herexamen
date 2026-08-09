import { openModal } from "./modal.js";
import { isFavorite, toggleFavorite } from "./storage.js";

export function renderAgents(agents) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  agents.forEach((agent) => {
    const card = document.createElement("div");
    card.classList.add("agent-card");

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
}