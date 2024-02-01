import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.jpg",
      href: "/logo.jpg",
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={cn(
            "relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800",
            inter.className
          )}
        >
          <Toaster />
          <h1 title="Home" className=" absolute p-2 text-center bg-transparent">
            <Link href={"/"} className="text-2xl rounded-lg">
              🏠
            </Link>
          </h1>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
