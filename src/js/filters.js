export function searchAgents(agents, query) {
  const normalizedQuery = query.toLowerCase().trim();

  return agents.filter((agent) =>
    agent.displayName.toLowerCase().includes(normalizedQuery)
  );
}

export function filterByRole(agents, role) {
  return role === "all"
    ? agents
    : agents.filter((agent) => agent.role && agent.role.displayName === role);
}