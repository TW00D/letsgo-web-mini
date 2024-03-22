import axios, { AxiosError } from "axios";
import { setToken, getToken } from "../functions/TokenManagers";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken = await getToken().accessToken;

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401 && error.response.data.message === "TokenExpiredError") {
      const originalRequest = config;
      const refreshToken = await getToken().refreshToken;

      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}`, {
        refreshToken,
      });
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        data;
      setToken(newAccessToken, newRefreshToken);
      axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;