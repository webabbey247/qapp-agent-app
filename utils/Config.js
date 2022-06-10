import axios from "axios";

const apiAuth = axios.create({
  baseURL: "http://qapp-agent-auth.eu-west-1.elasticbeanstalk.com/api/v1/auth",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Locale": { "id": "en", "country": "US", "name": "English - LTR", "direction": "ltr" },
    "Platform": "MOBILE",
  },
});

export { apiAuth,};
