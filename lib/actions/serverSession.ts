import { getServerSession } from "next-auth";

async function getUser() {
  const session = await getServerSession();
  return session;
}

export default async function ServerSession() {
  const serverSession = await getUser();

  return serverSession;
}
