import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/public/images/site-logo.svg";

import Theme from "./Theme";
import { useTheme } from "next-themes";
import { auth } from "@/auth";
import MobileNavigation from "./MobileNavigation";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex-between background-light900_dark200 static z-50 w-full gap-5 p-6 shadow-md sm:px-12">
      {/* // <nav className="w-full bg-[url('/images/teracare-bg1.svg')] bg-cover"> */}
      <Link href="/" className="flex items-center gap-1">
        <Image src={logo} width={36} height={36} alt="DevFlow" />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <div>Global Search</div>

      <div className="flex-between gap-5">
        Welcome {session?.user?.name}
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
