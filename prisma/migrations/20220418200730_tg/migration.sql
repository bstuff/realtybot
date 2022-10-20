-- CreateTable
CREATE TABLE "TgUser" (
    "id" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "username" TEXT,
    "languageCode" TEXT,

    CONSTRAINT "TgUser_pkey" PRIMARY KEY ("id")
);
