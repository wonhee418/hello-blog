import { getDetailPost, getPost } from '@/libs/api/post';
import { getUserIP } from '@/libs/api/user';
import { useQuery } from '@tanstack/react-query';

export const useGetUserIP = (URL: string) => {
  const { data, status, error } = useQuery<UserIPType>(['userinfo'], () => getUserIP(URL));
  return data;
};

export const useGetPost = () => {
  const { status, data, error } = useQuery<PostType[]>(['posts', '1'], () => getPost());
  return { data, status, error } as {
    data: PostType[];
    status: 'idle' | 'loading' | 'error' | 'success';
    error: any;
  };
};

export const useGetDetailPost = (id: string) => {
  const { status, data, error } = useQuery<PostType>(['detail', '1'], () => getDetailPost(id));

  return { data, status, error } as {
    data: PostType;
    status: 'idle' | 'loading' | 'error' | 'success';
    error: any;
  };
};
