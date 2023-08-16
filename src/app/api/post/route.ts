import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  const { title, content, thumbnail }: Partial<PostType> = await req.json();
  if (!title || !content || !thumbnail) return NextResponse.json('제목 또는 본문, 썸네일이 비어있습니다.');

  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
      thumbnail: thumbnail,
    },
  });
  return NextResponse.json(post);
};

export const GET = async () => {
  const allPosts = await prisma.post.findMany();
  return NextResponse.json(allPosts);
};
