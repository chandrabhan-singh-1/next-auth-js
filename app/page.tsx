"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  const [mode, setMode] = useState<boolean>(false);

  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 flex flex-col items-center justify-center">
        <h1
          className={cn(
            "text-6xl text-center font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐Auth
        </h1>
        <div>
          <p className="text-white text-lg">A simple authentication service</p>
          <p className="text-gray-900 font-medium text-[9px] text-center">
            (to demonstrate my NextAuth/Auth.js skills)
          </p>
        </div>

        <div className="w-[275px] flex justify-between relative">
          <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant={"link"} className="absolute left-[-42px] top-[-5px] animate-pulse text-md text-sky-500">
                  💬
                </Button>
            </HoverCardTrigger>
            <HoverCardContent
              side="left"
              align="start"
              className="w-72 bg-transparent/5 text-gray-200"
            >
              <p>
                If checked, then a modal will appear for Login/Registration. if
                unchecked, then you will be redirected to Login/Registration
                page.
              </p>
            </HoverCardContent>
          </HoverCard>
          <p className="text-md text-white font-semibold">
                Modal Mode:
          </p>
          <Switch
            checked={mode}
            onCheckedChange={() => setMode(!mode)}
            className="thumb:bg-green-700"
          />
        </div>

        <div className="flex gap-x-4">
          <LoginButton mode={mode ? "modal" : "redirect"} name="signin" asChild>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
          <LoginButton mode={mode ? "modal" : "redirect"} name="signup" asChild>
            <Button variant={"secondary"} size={"lg"}>
              Sign Up
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
