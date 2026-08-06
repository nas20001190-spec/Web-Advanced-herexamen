export function searchAgents(agents, query) {
  const normalizedQuery = query.toLowerCase().trim();

  return agents.filter((agent) =>
    agent.displayName.toLowerCase().includes(normalizedQuery)
  );
}