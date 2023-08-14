import { API } from './api';

export const getPost = async () => {
  const { data } = await API.get(`/blog/post`);
  return data;
};
