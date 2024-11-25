-- DropForeignKey
ALTER TABLE "Password" DROP CONSTRAINT "Password_userEmail_fkey";

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
