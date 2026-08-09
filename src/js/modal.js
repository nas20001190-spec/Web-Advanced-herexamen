export function openModal(agent) {
  const overlay = document.getElementById("modal-overlay");
  const body = document.getElementById("modal-body");

  const usableAbilities = agent.abilities.filter((a) => a.slot !== "Passive");

  const iconsHtml = usableAbilities
    .map((ability, index) => {
      const isUltimate = ability.slot === "Ultimate";
      return `
        <button
          class="ability-icon ${index === 0 ? "active" : ""} ${isUltimate ? "ultimate" : ""}"
          data-index="${index}"
        >
          <img src="${ability.displayIcon}" alt="${ability.displayName}">
        </button>
      `;
    })
    .join("");

  body.innerHTML = `
    <img class="modal-portrait" src="${agent.fullPortrait}" alt="${agent.displayName}">
    <div class="modal-info">
      <span class="modal-role">${agent.role ? agent.role.displayName : "Unknown"}</span>
      <h2>${agent.displayName}</h2>
      <p class="modal-description">${agent.description}</p>

      <h3>Abilities</h3>
      <div class="ability-icons">${iconsHtml}</div>
      <div id="ability-detail"></div>
    </div>
  `;

  function showAbility(index) {
    const ability = usableAbilities[index];
    const isUltimate = ability.slot === "Ultimate";
    const detail = document.getElementById("ability-detail");

    detail.innerHTML = `
      <h4 class="${isUltimate ? "ultimate-text" : ""}">
        ${ability.displayName}${isUltimate ? " (Ultimate)" : ""}
      </h4>
      <p>${ability.description}</p>
    `;

    document.querySelectorAll(".ability-icon").forEach((btn) => {
      btn.classList.toggle("active", Number(btn.dataset.index) === index);
    });
  }

  document.querySelectorAll(".ability-icon").forEach((btn) => {
    btn.addEventListener("click", () => showAbility(Number(btn.dataset.index)));
  });

  showAbility(0);

  overlay.classList.remove("hidden");
}

export function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
}