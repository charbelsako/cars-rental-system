import axios from "axios";

const customAxios = axios.create({ baseURL: "http://192.168.43.163:3000" });

export default customAxios;
