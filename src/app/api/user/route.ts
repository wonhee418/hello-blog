import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async () => {
  const user = await prisma.user.findMany();

  return NextResponse.json(user);
};
