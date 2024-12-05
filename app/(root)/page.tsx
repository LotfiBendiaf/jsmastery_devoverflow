import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import React from "react";

const Home = async () => {
  const session = await auth();

  return <div></div>;
};

export default Home;
