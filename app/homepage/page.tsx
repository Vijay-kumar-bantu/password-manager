import Form from "@/components/Form";
import ServerSession from "@/lib/actions/serverSession";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import getUserData from "@/lib/actions/getData";
import DataCard from "@/components/dataCard";

async function Homepage() {
  const serverSession = await ServerSession();
  const name = serverSession?.user?.name || "";
  const passwords = await getUserData();

  return (
    <main className=" h-[90vh] p-5 md:p-7 flex flex-col items-center bg-slate-800 text-white">
      <div className="flex justify-between w-4/5 p-5 mx-auto">
        <h1 className="text-3xl text-center">Hello {name}</h1>
        <Dialog>
          <DialogTrigger>
            {/* <Button variant={"secondary"}>Add Password</Button> */}
            Add password
          </DialogTrigger>
          <DialogContent>
            <Form />
          </DialogContent>
        </Dialog>
      </div>

      {/* user data */}

      <div className="grid grid-col-1 md:grid-cols-4 gap-5">
        {passwords?.map((password) => {
          return <DataCard {...password} />;
        })}
      </div>
    </main>
  );
}

export default Homepage;
