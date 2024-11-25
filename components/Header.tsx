"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

function Header() {
  const session = useSession();

  return (
    <>
      <header className="flex justify-between items-center p-5 bg-slate-900 text-white font-bold drop-shadow-md">
        <div className="text-2xl">Secure Store</div>
        {session.status != "authenticated" && (
          <Button
            variant={"secondary"}
            className="cursor-pointer"
            onClick={() => signIn(undefined, { callbackUrl: "/homepage" })}
          >
            LOGIN
          </Button>
        )}
        {session.status == "authenticated" && (
          <Button
            className="cursor-pointer"
            variant={"secondary"}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            LOG OUT
          </Button>
        )}
      </header>
    </>
  );
}

export default Header;
