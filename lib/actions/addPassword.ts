"use server";

import prisma from "@/db/prismaClient";
import ServerSession from "@/lib/actions/serverSession";
import CryptoJS from "crypto-js";

type DataTypes = {
  company: string;
  username: string;
  password: string;
};
const addPassword = async ({ company, username, password }: DataTypes) => {
  const session = await ServerSession();
  const user_email = session?.user?.email || "";
  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.CRYPTO_SECRET_MESSAGE || ""
  ).toString();

  try {
    await prisma.password.create({
      data: {
        userEmail: user_email,
        company: company,
        password: encryptedPassword,
        username: username,
      },
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default addPassword;

export const getPassword = (password: string) => {
  const decrypted = CryptoJS.AES.decrypt(
    password,
    process.env.CRYPTO_SECRET_MESSAGE || ""
  ).toString(CryptoJS.enc.Utf8);

  console.log(decrypted);

  return decrypted;
};
