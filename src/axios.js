import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ba5df.cloudfunctions.net/api", //the api (cloud function) url
});

export default instance;

// "http://localhost:5001/clone-ba5df/us-central1/api"
