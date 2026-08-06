export function renderAgents(agents) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  agents.forEach((agent) => {
    const card = document.createElement("div");
    card.classList.add("agent-card");

    card.innerHTML = `
      <img src="${agent.displayIcon}" alt="${agent.displayName}">
      <h3>${agent.displayName}</h3>
      <p>${agent.role ? agent.role.displayName : "Onbekend"}</p>
    `;

    app.appendChild(card);
  });
}