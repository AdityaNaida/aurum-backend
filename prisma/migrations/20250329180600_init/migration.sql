/*
  Warnings:

  - You are about to drop the column `roles` on the `Admin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "roles",
ALTER COLUMN "question" DROP DEFAULT,
ALTER COLUMN "superuser" SET DEFAULT false;
