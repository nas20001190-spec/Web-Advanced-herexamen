const STORAGE_KEY = "favoriteAgents";

export function getFavorites() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function isFavorite(agentUuid) {
  return getFavorites().includes(agentUuid);
}

export function toggleFavorite(agentUuid) {
  const favorites = getFavorites();
  const updated = favorites.includes(agentUuid)
    ? favorites.filter((id) => id !== agentUuid)
    : [...favorites, agentUuid];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}