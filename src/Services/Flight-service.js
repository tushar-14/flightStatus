import { myAxios } from "./Helper";

export const getData = (id) => {
  return myAxios.get(`/api/status?id=${id}`).then((response) => response.data);
};
