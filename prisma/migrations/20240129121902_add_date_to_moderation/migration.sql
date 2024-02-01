/*
  Warnings:

  - Added the required column `date` to the `Moderations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Moderations` ADD COLUMN `date` DATETIME(3) NOT NULL;
