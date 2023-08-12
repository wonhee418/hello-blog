type PostType = {
  id: string;
  title: string;
  tags: string[];
  content: string;
  createAt: string;
  updatedAt: string;
  userId: number;
  user: UserType;
};

type TagType = {
  id: string;
  name: string;
};
