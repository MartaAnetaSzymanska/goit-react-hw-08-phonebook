import axios from "axios";

const client = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
// Utility to add JWT

const setAuthHeader = (token) => {
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  client.defaults.headers.common.Authirization = "";
};
export { client, setAuthHeader, clearAuthHeader };
