/*
  Warnings:

  - You are about to drop the `Appointment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Appointment";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "appointment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "client" INTEGER NOT NULL,
    "staffMember" INTEGER NOT NULL,
    CONSTRAINT "appointment_client_fkey" FOREIGN KEY ("client") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "appointment_staffMember_fkey" FOREIGN KEY ("staffMember") REFERENCES "StaffMember" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "appointment_client_staffMember__index" ON "appointment"("staffMember", "client");

-- CreateIndex
CREATE UNIQUE INDEX "appointment_startDate_endDate_key" ON "appointment"("startDate", "endDate");
