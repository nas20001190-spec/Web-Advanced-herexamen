const API_URL = "https://valorant-api.com/v1/agents";

export async function fetchAgents() {
  try {
    const response = await fetch(`${API_URL}?isPlayableCharacter=true`);

    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`);
    }

    const result = await response.json();
    return result.data;

  } catch (error) {
    console.error("Impossible de récupérer les agents:", error);
    return [];
  }
}