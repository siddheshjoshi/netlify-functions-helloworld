import axios from "axios";

export default axios.create({
  baseURL: "https://frosty-ritchie-e137ca.netlify.app/.netlify/functions/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
