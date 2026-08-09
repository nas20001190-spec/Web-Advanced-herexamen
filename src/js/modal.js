import { getNote, saveNote, deleteNote } from "./storage.js";

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
      <span class="modal-role">${agent.role ? agent.role.displayName : "Onbekend"}</span>
      <h2>${agent.displayName}</h2>
      <p class="modal-description">${agent.description}</p>

      <h3>Skills</h3>
      <div class="ability-icons">${iconsHtml}</div>
      <div id="ability-detail"></div>

      <h3>Mijn notitie</h3>
      <form id="note-form">
        <textarea id="note-input" placeholder="Schrijf hier je persoonlijke notitie over deze agent...">${getNote(agent.uuid)}</textarea>
        <p id="note-error" class="form-error hidden">Notitie moet minstens 5 tekens bevatten.</p>
        <div class="note-actions">
          <button type="submit">Opslaan</button>
          <button type="button" id="note-delete" class="${getNote(agent.uuid) ? "" : "hidden"}">Verwijderen</button>
          <span id="note-saved" class="note-saved hidden">Opgeslagen ✓</span>
        </div>
      </form>
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

  const noteForm = document.getElementById("note-form");
  const noteInput = document.getElementById("note-input");
  const noteError = document.getElementById("note-error");
  const noteSaved = document.getElementById("note-saved");
  const noteDeleteBtn = document.getElementById("note-delete");

  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = noteInput.value.trim();

    if (value.length < 5) {
      noteError.classList.remove("hidden");
      noteSaved.classList.add("hidden");
      return;
    }

    noteError.classList.add("hidden");
    saveNote(agent.uuid, value);
    noteSaved.classList.remove("hidden");
    noteDeleteBtn.classList.remove("hidden");
  });

  noteDeleteBtn.addEventListener("click", () => {
    deleteNote(agent.uuid);
    noteInput.value = "";
    noteError.classList.add("hidden");
    noteSaved.classList.add("hidden");
    noteDeleteBtn.classList.add("hidden");
  });

  overlay.classList.remove("hidden");
}

export function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
}