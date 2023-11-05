// API Endpoint URLs

/** @type {string} - Endpoint to fetch culture values */
const cultureUrl = "http://localhost:5000/caltureValues";

/** @type {string} - Endpoint to fetch management data */
const managementUrl = "http://localhost:5000/management";

/** @type {string} - Endpoint to fetch statistics */
const statsUrl = "http://localhost:5000/stats";

/** @type {string} - Endpoint to fetch company data */
const companiesUrl: string = "http://localhost:5000/companies";

/** @type {string} - Endpoint to fetch team data (Note: same as companiesUrl) */
const TeamUrl = "http://localhost:5000/companies";

/** @type {string} - Endpoint to fetch historical data */
const HistoryUrl = "http://localhost:5000/history";

/** @type {string} - Endpoint to fetch figures/statistics */
const figuresUrl = "http://localhost:5000/figures";
// Functions to fetch data from respective API endpoints
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
/**
 * Fetches data from the culture values endpoint
 * @returns {Promise<Object[]>} - A promise that resolves to an array of culture values
 */
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

/**
 * Fetches data from the management endpoint
 * @returns {Promise<Object[]>} - A promise that resolves to an array of management data
 */
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
/**
 * Fetches data from the statistics endpoint
 * @returns {Promise<Object[]>} - A promise that resolves to an array of statistics
 */
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

/**
 * Fetches data from the team endpoint
 * @returns {Promise<Object[]>} - A promise that resolves to an array of team data
 */
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

/**
 * Fetches data from the history endpoint
 * @returns {Promise<Object[]>} - A promise that resolves to an array of historical data
 */
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
//fetch data related to figures and other statistcs
/**
 * Fetches data from the figures endpoint
 * @returns {Promise<Object[]>} - A promise that resolves to an array of figures/statistics
 */
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


// Best practices for fetching data
/** @type {string} - Base URL for API requests */
const baseURL = "http://localhost:5000/";

/**
 * Fetches data from the specified API endpoint
 * @param {string} endpoint - The API endpoint to fetch data from
 * @returns {Promise<Object[]>} - A promise that resolves to an array of fetched data
 */
export const fetchDataFromAnyEndpoint = async (endpoint: string) => {
  try {
    const response = await fetch(baseURL + endpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return [];
  }
};
