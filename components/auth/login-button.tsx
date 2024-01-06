"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

interface LoginButtonProps {
  children: React.ReactNode;
  name: "signin" | "signup";
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
  name = "signin",
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    if (name === "signup") {
      router.push("/auth/register");
    } else {
      router.push("/auth/login");
    }
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          {name === "signup" ? <RegisterForm /> : <LoginForm />}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
