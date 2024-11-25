import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/db/prismaClient";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ account, profile }: any) {
      const alreadyExist = await prisma.user.findFirst({
        where: {
          email: profile?.email,
        },
      });
      if (!alreadyExist) {
        const user = await prisma.user.create({
          data: {
            name: profile?.name,
            email: profile?.email,
          },
        });
      }
      return profile?.email_verified;
    },
  },
});

export { handler as GET, handler as POST };
