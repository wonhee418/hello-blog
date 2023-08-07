type PostType = {
  id: string;
  title: string;
  tags: TagType[];
  content: string;
  createAt: string;
  updatedAt: string;
  userId: number;
  user: UserType;
};

type TagType = {
  id: string;
  name: string;
  posts: PostType[];
};
