import { fetchAgents } from "./js/api.js";
import { renderAgents } from "./js/render.js";
import { searchAgents } from "./js/filters.js";

let allAgents = [];

const searchInput = document.getElementById("search-input");

fetchAgents().then((agents) => {
  allAgents = agents;
  renderAgents(allAgents);
});

searchInput.addEventListener("input", () => {
  const filtered = searchAgents(allAgents, searchInput.value);
  renderAgents(filtered);
});