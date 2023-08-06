type PostType = {
  id: number;
  title: string;
  tags: TagType[];
  content: string;
  createAt: string;
  updatedAt: string;
  userId: number;
  user: UserType;
};

type TagType = {
  id: number;
  name: string;
  posts: PostType[];
};
