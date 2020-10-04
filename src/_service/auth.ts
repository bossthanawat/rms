import axios from "./helper/interceptors";
import { AxiosPromise } from "axios";

const API = process.env.VUE_APP_APIURL;

export function login(email: string, password: string): AxiosPromise<any> {
  const body = {
    email,
    password,
  };
  return axios({
    method: "post",
    url: `${API}/login`,
    data: body,
  });
}

export default {
  login,
};
