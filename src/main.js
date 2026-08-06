import { fetchAgents } from "./js/api.js";
import { renderAgents } from "./js/render.js";
import { searchAgents, filterByRole } from "./js/filters.js";

let allAgents = [];

const searchInput = document.getElementById("search-input");
const roleFilter = document.getElementById("role-filter");

fetchAgents().then((agents) => {
  allAgents = agents;
  renderAgents(allAgents);
});

function applyFiltersAndSearch() {
  let result = filterByRole(allAgents, roleFilter.value);
  result = searchAgents(result, searchInput.value);
  renderAgents(result);
}

searchInput.addEventListener("input", applyFiltersAndSearch);
roleFilter.addEventListener("change", applyFiltersAndSearch);