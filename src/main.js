import { fetchAgents } from "./js/api.js";
import { renderAgents } from "./js/render.js";

fetchAgents().then((agents) => {
  renderAgents(agents);
});