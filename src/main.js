import { fetchAgents } from "./js/api.js";
import { renderAgents } from "./js/render.js";
import { searchAgents, filterByRole, sortAgents } from "./js/filters.js";
import { closeModal } from "./js/modal.js";

let allAgents = [];

const searchInput = document.getElementById("search-input");
const roleFilter = document.getElementById("role-filter");
const sortSelect = document.getElementById("sort-select");
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");

fetchAgents().then((agents) => {
  allAgents = agents;
  renderAgents(allAgents);
});

function applyFiltersAndSearch() {
  let result = filterByRole(allAgents, roleFilter.value);
  result = searchAgents(result, searchInput.value);
  result = sortAgents(result, sortSelect.value);
  renderAgents(result);
}

searchInput.addEventListener("input", applyFiltersAndSearch);
roleFilter.addEventListener("change", applyFiltersAndSearch);
sortSelect.addEventListener("change", applyFiltersAndSearch);

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});