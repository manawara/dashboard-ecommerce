import React from "react";
import Input from "../Form/Input/Input";
import { Mail, KeyRound, User2Icon } from "lucide-react";
import Button from "../Button/Button";
import Checkbox from "../Form/Checkbox/Checkbox";
import AuthDivider from "./AuthDivider/AuthDivider";
import HeaderFormAuth from "./HeaderFormAuth/HeaderFormAuth";
import Link from "next/link";
const FormRegister = () => {
  return (
    <section className="mt-4">
      <HeaderFormAuth
        heading="Sign Up"
        description="New to our platform? Sign up now! It only takes a minute."
      />
      <form className=" flex flex-col gap-6">
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          label="Name"
          icon={
            <User2Icon className="text-inherit" strokeWidth={1} size={20} />
          }
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          label="Email"
          icon={<Mail className="text-inherit" strokeWidth={1} size={20} />}
        />

        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          label="Password"
          icon={<KeyRound className="text-inherit" strokeWidth={1} size={20} />}
        />

        <Checkbox label="I accept Terms and Condition" name="termsCondition" />

        <Button rounded="xl" size="full" soft="orange" fontSize="small">
          Sign Up
        </Button>

        <AuthDivider>OR sign with</AuthDivider>
        <Button soft="gray" fontSize="small">
          Sign Up with Google
        </Button>
        <div className="-mt-4 ">
          <Button soft="orange" fontSize="small" size="full">
            Sign Up with Facebook
          </Button>
        </div>
      </form>
    </section>
  );
};

export default FormRegister;
