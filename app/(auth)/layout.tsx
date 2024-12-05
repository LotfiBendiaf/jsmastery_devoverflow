import React from "react";
import Image from "next/image";
import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-center bg-cover">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-[80%] rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex item-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-light400_light500">
              To get your questions answered
            </p>
          </div>
          <Image
            src="images/site-logo.svg"
            width={50}
            height={50}
            alt="TeraCare Logo"
            className="object-contain"
          />
        </div>
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
