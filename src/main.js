import { fetchAgents } from "./js/api.js";
import { renderAgents } from "./js/render.js";
import { searchAgents, filterByRole, sortAgents } from "./js/filters.js";
import { closeModal } from "./js/modal.js";
import { getFavorites, getRolePreference, saveRolePreference } from "./js/storage.js";

let allAgents = [];
let showOnlyFavorites = false;

const searchInput = document.getElementById("search-input");
const roleFilter = document.getElementById("role-filter");
const sortSelect = document.getElementById("sort-select");
const favoritesToggle = document.getElementById("favorites-toggle");
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");

roleFilter.value = getRolePreference();

fetchAgents().then((agents) => {
  allAgents = agents;
  applyFiltersAndSearch();
});

function applyFiltersAndSearch() {
  let result = filterByRole(allAgents, roleFilter.value);
  result = searchAgents(result, searchInput.value);

  if (showOnlyFavorites) {
    const favorites = getFavorites();
    result = result.filter((agent) => favorites.includes(agent.uuid));
  }

  result = sortAgents(result, sortSelect.value);
  renderAgents(result);
}

searchInput.addEventListener("input", applyFiltersAndSearch);

roleFilter.addEventListener("change", () => {
  saveRolePreference(roleFilter.value);
  applyFiltersAndSearch();
});

sortSelect.addEventListener("change", applyFiltersAndSearch);

favoritesToggle.addEventListener("click", () => {
  showOnlyFavorites = !showOnlyFavorites;
  favoritesToggle.classList.toggle("active", showOnlyFavorites);
  applyFiltersAndSearch();
});

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});