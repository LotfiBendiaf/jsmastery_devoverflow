"use client";

import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({
  isMobileNav = false,
  userId,
}: {
  isMobileNav: boolean;
  userId?: string;
}) => {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
          else return null;
        }

        const LinkComponent = (
          <Link
            className={cn(
              isActive
                ? "primary-gradient text-light-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent rounded-lg px-4 py-2 hover:background-light700_dark300"
            )}
            href={item.route}
            key={item.label}
          >
            <Image
              className={cn({ "invert-colors": !isActive })}
              src={item.imgURL}
              alt={item.label}
              height={20}
              width={20}
            ></Image>
            <p
              className={cn(
                isActive ? "base-medium" : "text-xs",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );
        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};
export default NavLinks;
