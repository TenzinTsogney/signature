import axios from "axios";

const API = axios.create({
  baseURL: "dapper-croissant-695190.netlify.app/api", // change if deployed
});

export default API;
