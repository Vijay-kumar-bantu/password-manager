"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import addPassword from "@/lib/actions/addPassword";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { BlockquoteHTMLAttributes } from "react";

type Inputs = {
  company: string;
  username: string;
  password: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { toast } = useToast();

  const generateToast = (param: boolean) => {
    if (param) {
      toast({
        title: "Password Added",
        description: "Password added successfully",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await addPassword(data);
    generateToast(result);
    reset();
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Add New password</CardTitle>
        <CardDescription>Please Enter your details</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="company">Wesbite/app</Label>
            <Input
              id="company"
              type="text"
              placeholder="company"
              {...register("company")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email/Username</Label>
            <Input
              id="email"
              type="text"
              placeholder="m@example.com"
              {...register("username")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password")} />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Add
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
