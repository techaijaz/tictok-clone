import axios from "axios";

const instance = axios.create({
  baseURL: "https://tictok-mren.herokuapp.com/",
});

export default instance;
