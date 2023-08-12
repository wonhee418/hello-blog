// import { PrismaClient } from '@prisma/client';
// import { NextRequest, NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export const POST = async (req: NextRequest) => {
//   const { title, content, tags }: Partial<PostType> = await req.json();
//   if (!title || !content) return NextResponse.json('제목 또는 타이틀이 비어있습니다.');
//   console.log(title, content, tags);

//   const post = await prisma.post.create({
//     data: {
//       title: title,
//       content: content,
//     },
//   });

//   return NextResponse.json(post);
// };

// export const GET = async (req: NextRequest) => {
//   const { searchParams } = new URL(req.url);
//   const obj = Object.fromEntries(searchParams.entries());

//   if (obj.id) {
//     const getpost = await prisma.post.findUnique({
//       where: {
//         id: Number(obj.id),
//       },
//     });
//     return NextResponse.json(getpost);
//   } else {
//     const allPosts = await prisma.post.findMany();
//     return NextResponse.json(allPosts);
//   }
// };
