import axios from "axios";
const BASE_URL = "http://localhost:8080";

const getTeams = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/team`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const getTeamInfo = async (teamName) => {
  try {
    const response = await axios.get(`${BASE_URL}/team/${teamName}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const getMatchesByYear = async (teamName, year) => {
  try {
    const response = await axios.get(`${BASE_URL}/team/${teamName}/matches`, { params : { year }});
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export { getTeams, getTeamInfo, getMatchesByYear };
