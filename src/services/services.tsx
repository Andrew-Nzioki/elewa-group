const cultureUrl = "http://localhost:5000/caltureValues";
const managementUrl = "http://localhost:5000/management";
const statsUrl = "http://localhost:5000/stats";
const companiesUrl = "http://localhost:5000/companies";
const TeamUrl = "http://localhost:5000/companies";
const HistoryUrl = "http://localhost:5000/history";
const figuresUrl= "http://localhost:5000/figures";
export const fetchCompanies = async () => {
  try {
    const response = await fetch(companiesUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
};

export const fetchCultures = async () => {
  try {
    const response = await fetch(cultureUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching culture values:", error);
    return [];
  }
};

export const fetchManagement = async () => {
  try {
    const response = await fetch(managementUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching management data:", error);
    return [];
  }
};

export const fetchStats = async () => {
  try {
    const response = await fetch(statsUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching stats:", error);
    return [];
  }
};

export const fetchTeam = async () => {
  try {
    const response = await fetch(TeamUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching stats:", error);
    return [];
  }
};

export const fetchHistory = async () => {
  try {
    const response = await fetch(HistoryUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching stats:", error);
    return [];
  }
};

export const fetchFigures = async () => {
  try {
    const response = await fetch(figuresUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching stats:", error);
    return [];
  }
};