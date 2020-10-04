import axios from "./helper/interceptors";
import { AxiosPromise } from "axios";

const API = process.env.VUE_APP_APIURL;

export function history(token: string): AxiosPromise<any> {
  const body = {
    token
  };
  return axios({
    method: "post",
    url: `${API}/history`,
    data: body,
  });
}

export default {
  history,
};
