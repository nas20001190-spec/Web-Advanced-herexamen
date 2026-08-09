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

const NOTES_KEY = "agentNotes";

export function getNote(agentUuid) {
  const notes = JSON.parse(localStorage.getItem(NOTES_KEY)) || {};
  return notes[agentUuid] || "";
}

export function saveNote(agentUuid, text) {
  const notes = JSON.parse(localStorage.getItem(NOTES_KEY)) || {};
  notes[agentUuid] = text;
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export function deleteNote(agentUuid) {
  const notes = JSON.parse(localStorage.getItem(NOTES_KEY)) || {};
  delete notes[agentUuid];
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

const ROLE_PREF_KEY = "lastRoleFilter";

export function getRolePreference() {
  return localStorage.getItem(ROLE_PREF_KEY) || "all";
}

export function saveRolePreference(role) {
  localStorage.setItem(ROLE_PREF_KEY, role);
}

const THEME_KEY = "theme";

export function getTheme() {
  return localStorage.getItem(THEME_KEY) || "dark";
}

export function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}