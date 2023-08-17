import { API } from './api';

export const getPost = async () => {
  const { data } = await API.get(`/api/post/`);
  return data;
};

export const getDetailPost = async (id: String) => {
  const { data } = await API.get(`/api/post/detail/?id=${id}`);
  return data;
};
