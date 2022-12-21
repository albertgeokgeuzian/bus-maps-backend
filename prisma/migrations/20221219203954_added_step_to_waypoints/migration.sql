/*
  Warnings:

  - Added the required column `step` to the `Waypoint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Waypoint" ADD COLUMN     "step" INTEGER NOT NULL;
