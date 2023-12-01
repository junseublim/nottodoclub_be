/*
  Warnings:

  - You are about to drop the column `authorId` on the `Moderations` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Nottodo` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Moderations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Nottodo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Moderations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "success" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "nottodoId" INTEGER NOT NULL,
    CONSTRAINT "Moderations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Moderations_nottodoId_fkey" FOREIGN KEY ("nottodoId") REFERENCES "Nottodo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Moderations" ("content", "id", "nottodoId", "success") SELECT "content", "id", "nottodoId", "success" FROM "Moderations";
DROP TABLE "Moderations";
ALTER TABLE "new_Moderations" RENAME TO "Moderations";
CREATE TABLE "new_Nottodo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Nottodo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Nottodo" ("createdAt", "endDate", "goal", "id", "startDate", "title", "updatedAt") SELECT "createdAt", "endDate", "goal", "id", "startDate", "title", "updatedAt" FROM "Nottodo";
DROP TABLE "Nottodo";
ALTER TABLE "new_Nottodo" RENAME TO "Nottodo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
