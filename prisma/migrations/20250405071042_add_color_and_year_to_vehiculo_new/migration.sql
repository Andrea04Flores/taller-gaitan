/*
  Warnings:

  - Added the required column `año` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehiculo" ADD COLUMN     "año" INTEGER NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL;
