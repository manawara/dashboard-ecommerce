import FormRegister from "@/app/_components/Auth/FormRegister";
import Logo from "@/app/_components/Logo/Logo";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <section className="flex flex-col justify-center mx-auto w-full px-4 sm:w-2/3 md:w-1/2 lg:w-2/5">
      <Logo />
      <FormRegister />

      <p className="text-primary text-sm text-center mt-8">
        I already have an account{" "}
        <Link href="/signin" className="text-gray-dark font-semibold">
          Sign In
        </Link>
      </p>
    </section>
  );
};

export default SignupPage;
