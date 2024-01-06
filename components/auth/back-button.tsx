"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Button variant={"link"} size={"sm"} asChild className="font-normal w-full">
      <Link href={href}>{label}</Link>
    </Button>
  );
};
