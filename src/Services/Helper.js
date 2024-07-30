import axios from "axios";

export const BASE_URL = "http://localhost:8090";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export function convertDate(val) {
  var date = new Date(val);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var month = months[date.getMonth()];
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var year = date.getFullYear();

  var dateVal = date.getDate();
  return (
    dateVal +
    " " +
    month +
    "," +
    year +
    " " +
    hours +
    ":" +
    (minutes == 0 ? "00" : minutes)
  );
}
