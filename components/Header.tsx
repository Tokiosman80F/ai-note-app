import { shadow } from "@/app/styles/utils";
import nextIcon from "@/public/image.png";
import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "./Logout";
import { Button } from "./ui/button";

function Header() {
  const user = 1;

  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <Link href="/" className="flex gap-2">
        <Image
          src={nextIcon}
          width={60}
          height={60}
          alt="logo"
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col leading-6 font-bold">
          NEXT <span>Notes</span>
        </h1>
      </Link>

      <div className="flex items-center justify-center gap-4">
        {user ? (
          <Logout />
        ) : (
          <>
            <Button asChild className="hidden sm:inline-flex">
              <Link href="/signup">Sign up</Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
