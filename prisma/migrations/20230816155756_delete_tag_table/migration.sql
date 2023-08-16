/*
  Warnings:

  - You are about to drop the `_posttotags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_posttotags` DROP FOREIGN KEY `_PostToTags_A_fkey`;

-- DropForeignKey
ALTER TABLE `_posttotags` DROP FOREIGN KEY `_PostToTags_B_fkey`;

-- DropTable
DROP TABLE `_posttotags`;

-- DropTable
DROP TABLE `tags`;
