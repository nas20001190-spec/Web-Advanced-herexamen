import { fetchAgents } from "./js/api.js";

fetchAgents().then((agents) => {
  console.log(agents);
});