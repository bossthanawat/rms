import axios from "./helper/interceptors";
import { AxiosPromise } from "axios";
import Vue from "vue";
const API = process.env.VUE_APP_APIURL;

export function sendlocation(
  latitude: number,
  longitude: number,
  accuracy: number,
  timestamp: number,
  actions: string,
): AxiosPromise<any> {
  const body = {
    latitude,
    longitude,
    accuracy,
    timestamp,
    actions,
    token:Vue.ls.get("token")
  };
  return axios({
    method: "post",
    url: `${API}/sendlocation`,
    data: body,
  });
}

export default {
  sendlocation,
};
