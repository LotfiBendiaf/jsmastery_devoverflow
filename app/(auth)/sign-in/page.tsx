"use client";

import React from "react";
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import SocialAuthForm from "@/components/forms/SocialAuthForm";
import { signInWithCredentials } from "@/lib/actions/auth.action";

const SignIn = () => {
  return (
    <>
      <AuthForm
        formType="SIGN_IN"
        schema={SignInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={signInWithCredentials}
      />
      <div className="border-b-[1px] h-1 my-6 flex items-center justify-center">
        <span className="text-light400_light500 px-2 background-light800_dark200">
          Or
        </span>
      </div>
      <SocialAuthForm action="Log In" />
    </>
  );
};

export default SignIn;
