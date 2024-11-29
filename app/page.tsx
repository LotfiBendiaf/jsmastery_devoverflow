import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Image
        src="/images/site-logo.svg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <h1 className="h1-bold">Welcome to the NextJs Project</h1>
      <h1 className="h1-bold font-space-grotesk text-blue-700">
        It is a Boilerplate project
      </h1>
    </div>
  );
};

export default Home;
