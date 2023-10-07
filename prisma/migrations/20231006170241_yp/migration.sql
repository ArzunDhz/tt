/*
  Warnings:

  - You are about to drop the column `profilePicture` on the `User` table. All the data in the column will be lost.
  - Added the required column `pp` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "profilePicture",
ADD COLUMN     "pp" TEXT NOT NULL;
