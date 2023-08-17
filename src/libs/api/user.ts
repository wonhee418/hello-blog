import { API } from './api';

export const getUserIP = async (URL: string) => {
  const { data } = await API.get(URL);
  return data;
};
