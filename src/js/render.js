import { openModal } from "./modal.js";

export function renderAgents(agents) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  agents.forEach((agent) => {
    const card = document.createElement("div");
    card.classList.add("agent-card");

    card.innerHTML = `
      <span class="agent-role">${agent.role ? agent.role.displayName : "?"}</span>
      <img src="${agent.displayIcon}" alt="${agent.displayName}">
      <h3>${agent.displayName}</h3>
    `;

    card.addEventListener("click", () => openModal(agent));

    app.appendChild(card);
  });
}