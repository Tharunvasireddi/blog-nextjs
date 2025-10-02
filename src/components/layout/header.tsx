"use clinet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  const navItems = [
    {
      label: "home",
      href: "/",
    },
    {
      label: "create",
      href: "/post/create",
    },
  ];
  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between ">
        <div className="flex items-center gap-6">
          <Link href={"/"} className="font-bold text-xl">
            {" "}
            Next.js 15 blog
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 ">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-meduim transistion-colors hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4  ">
          <div className="hidden md:block">
            {/* keep an place holder for search */}
          </div>
          {/*  placeholder for theme togger*/}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => router.push("/auth")}
            >
              login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
