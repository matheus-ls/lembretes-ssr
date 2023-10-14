-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "todo" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
