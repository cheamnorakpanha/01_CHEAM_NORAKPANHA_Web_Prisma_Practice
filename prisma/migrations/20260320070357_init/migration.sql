-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "class" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);
