import axios from "axios";

class HttpService{
  constructor() {
    this.client = axios.create({
      baseURL: "http://127.0.0.1:8000/api",
    });

    this.client.interceptors.request.use(function (config) {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }
}

export default HttpService;