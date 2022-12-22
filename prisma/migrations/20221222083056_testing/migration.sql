/*
  Warnings:

  - You are about to drop the column `userUsername` on the `UserToRoutes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `UserToRoutes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[busRouteId]` on the table `UserToRoutes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[busRouteId,userId]` on the table `UserToRoutes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `UserToRoutes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserToRoutes" DROP CONSTRAINT "UserToRoutes_userUsername_fkey";

-- AlterTable
ALTER TABLE "UserToRoutes" DROP COLUMN "userUsername",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserToRoutes_userId_key" ON "UserToRoutes"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserToRoutes_busRouteId_key" ON "UserToRoutes"("busRouteId");

-- CreateIndex
CREATE UNIQUE INDEX "UserToRoutes_busRouteId_userId_key" ON "UserToRoutes"("busRouteId", "userId");

-- AddForeignKey
ALTER TABLE "UserToRoutes" ADD CONSTRAINT "UserToRoutes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
