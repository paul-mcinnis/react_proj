let backendHost;
const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "https://localhost:5001";
} else {
  backendHost = hostname;
}

export const API_BASE_URL = `${backendHost}/api/`;
