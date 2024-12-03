import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import React from "react";

const Home = async () => {
  const session = await auth();

  console.log(session);
  return (
    <div className="flex flex-col py-10 items-center justify-center gap-5">
      <Image
        src="/images/site-logo.svg"
        width={500}
        height={500}
        alt="Main Logo"
      />
      <h1 className="h1-bold">Welcome to the NextJs Project</h1>
      <h1 className="h1-bold font-space-grotesk text-blue-700">
        It is a Boilerplate project
      </h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </div>
  );
};

export default Home;
