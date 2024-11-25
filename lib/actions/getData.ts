"use server";

import prisma from "@/db/prismaClient";
import ServerSession from "./serverSession";

const getUserData = async () => {
  const session = await ServerSession();
  const user_email = session?.user?.email || "";
  try {
    const data = await prisma.user.findUnique({
      where: { email: user_email },
      include: { passwords: true },
    });
    console.log(data?.passwords);
    return data?.passwords;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export default getUserData;
