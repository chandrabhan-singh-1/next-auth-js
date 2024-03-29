"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex itemsc-center w-full gap-x-2">
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => onClick("google")}
        className="w-full"
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => onClick("github")}
        className="w-full"
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};
