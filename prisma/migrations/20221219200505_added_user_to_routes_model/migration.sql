-- AlterTable
ALTER TABLE "BusRoutes" ADD COLUMN     "userUsername" TEXT;

-- CreateTable
CREATE TABLE "UserToRoutes" (
    "id" SERIAL NOT NULL,
    "userUsername" TEXT NOT NULL,
    "busRouteId" INTEGER NOT NULL,

    CONSTRAINT "UserToRoutes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "BusRoutes" ADD CONSTRAINT "BusRoutes_userUsername_fkey" FOREIGN KEY ("userUsername") REFERENCES "User"("username") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToRoutes" ADD CONSTRAINT "UserToRoutes_userUsername_fkey" FOREIGN KEY ("userUsername") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToRoutes" ADD CONSTRAINT "UserToRoutes_busRouteId_fkey" FOREIGN KEY ("busRouteId") REFERENCES "BusRoutes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
