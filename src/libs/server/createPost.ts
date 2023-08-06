import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const data = [{ email: 'dnjsgml@naver.com', name: 'wonhee' }];

    const res = await prisma.user.createMany({
      data,
      skipDuplicates: true,
    });

    console.log('Created a user sucessfully', res);
  } catch (err) {
    console.log('Create a user Error:', err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
main();
