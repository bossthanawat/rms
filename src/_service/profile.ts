import axios from "./helper/interceptors";
import { AxiosPromise } from "axios";

const API = process.env.VUE_APP_APIURL;

export function loadcurrent(token: string): AxiosPromise<any> {
  const body = {
    token
  };
  return axios({
    method: "post",
    url: `${API}/loadcurrent`,
    data: body,
  });
}

export default {
  loadcurrent,
};
