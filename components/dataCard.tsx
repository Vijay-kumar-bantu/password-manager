"use client";

import React from "react";
import { Button } from "./ui/button";
import CryptoJS from "crypto-js";
import { getPassword } from "@/lib/actions/addPassword";

function DataCard({ company, username, password }: any) {
  const copyPassword = async () => {
    const decryptedPassword = await getPassword(password);
    console.log(decryptedPassword.toString());
    navigator.clipboard.writeText(decryptedPassword.toString());
  };
  return (
    <div className="px-5 py-7 bg-white text-black rounded-sm text-center">
      <div className="flex flex-col gap-3">
        <div>{company}</div>
        <div>{username}</div>
        <Button onClick={copyPassword}>Copy password</Button>
      </div>
    </div>
  );
}

export default DataCard;
