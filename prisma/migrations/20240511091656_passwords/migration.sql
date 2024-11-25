-- CreateTable
CREATE TABLE "Password" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
