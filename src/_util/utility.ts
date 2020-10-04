import moment from 'moment';

export function convertTimeWorkToMilliseconds(time:number):number{
  return ((+time * 100) / 100) * 60 * 60000;
}

export function convertTimeWorkToFormatHours(time:number):string{
  return moment.utc(convertTimeWorkToMilliseconds(time)).format("HH:mm:ss");
}

import { ILonLat } from "@/_service/models";
export function convertFormatLocation(location:string):ILonLat{
  const result = location.split(",") ?? ["", ""];
    return {
      lat: result[0],
      lon: result[1],
    }; 
}
export default {
  convertTimeWorkToMilliseconds,
  convertTimeWorkToFormatHours
}