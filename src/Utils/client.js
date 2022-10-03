import axios from "axios";

const BASE_URL = "https://stark-tor-97095.herokuapp.com/api/v1/users";

export default axios.create({
  baseURL: BASE_URL,
});
