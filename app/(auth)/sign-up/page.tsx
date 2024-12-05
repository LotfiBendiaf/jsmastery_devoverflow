"use client";

import AuthForm from "@/components/forms/AuthForm";
import SocialAuthForm from "@/components/forms/SocialAuthForm";
import { SignUpSchema } from "@/lib/validations";
import React from "react";

const SignUp = () => {
  return (
    <>
      <AuthForm
        formType="SIGN_UP"
        schema={SignUpSchema}
        defaultValues={{ email: "", password: "", name: "", username: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
      <div className="border-b-[1px] h-1 my-6 flex items-center justify-center">
        <span className="text-light400_light500 px-2 background-light800_dark200">
          Or
        </span>
      </div>
      <SocialAuthForm action="Sign Up" />
    </>
  );
};

export default SignUp;
