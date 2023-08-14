import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const obj = Object.fromEntries(searchParams.entries());

  if (obj.id) {
    const getpost = await prisma.post.findUnique({
      where: {
        id: Number(obj.id),
      },
    });
    return NextResponse.json(getpost);
  }
};
