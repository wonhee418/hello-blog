import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllUserData() {
  try {
    const user = await prisma.user.findMany();
    console.log(user);
    return user;
  } catch (err) {
    console.log('Create a user Error:', err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
