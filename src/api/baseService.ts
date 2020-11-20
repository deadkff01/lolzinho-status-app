import axios from "axios";
import { API_ENDPOINT } from "../../consts";

const baseService = (headerParams = {}) => {
  const headers = {
    ...headerParams,
  };
  return axios.create({
    baseURL: `${API_ENDPOINT}/`,
    maxRedirects: 0,
    headers,
  });
};

export const getPlayerByName = (name: string) =>
  baseService().post(`player`, { name });

export default baseService;
