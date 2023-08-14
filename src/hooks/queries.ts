import { getPost } from '@/libs/api/post';
import { useQuery } from '@tanstack/react-query';

export const useGetPost = () => {
  const { status, data, error } = useQuery<PostType[]>({
    queryKey: ['post', '1'],
    queryFn: getPost,
  });

  return { data, status, error } as {
    data: PostType[];
    status: 'idle' | 'loading' | 'error' | 'success';
    error: any;
  };
};
