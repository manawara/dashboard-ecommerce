import FormLogin from "@/app/_components/Auth/FormLogin";
import Logo from "@/app/_components/Logo/Logo";
import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <section className="flex flex-col justify-center mx-auto w-full px-4 sm:w-2/3 md:w-1/2 lg:w-2/5">
      <Logo />
      <FormLogin />

      <p className="text-primary text-sm text-center mt-8">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-gray-dark font-semibold">
          Sign Up
        </Link>
      </p>
    </section>
  );
};

export default Signin;
