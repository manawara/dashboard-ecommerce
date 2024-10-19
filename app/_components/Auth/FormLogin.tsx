import React from "react";
import Input from "../Form/Input/Input";
import { Mail, KeyRound } from "lucide-react";
import Button from "../Button/Button";
import Checkbox from "../Form/Checkbox/Checkbox";
import AuthDivider from "./AuthDivider/AuthDivider";
import facebookIcon from "@/public/facebook.svg";
import HeaderFormAuth from "./HeaderFormAuth/HeaderFormAuth";
const FormLogin = () => {
  return (
    <section className="mt-4">
      <HeaderFormAuth
        heading="Sign In"
        description="Enter your email address and password to access admin panel."
      />
      <form className=" flex flex-col gap-6">
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

        <Checkbox label="Remember me" name="rememberMe" />

        <Button rounded="xl" size="full" soft="orange" fontSize="small">
          Sign In
        </Button>

        <AuthDivider>OR sign with</AuthDivider>
        <Button soft="gray" fontSize="small">
          Sign in with Google
        </Button>
        <div className="-mt-4 ">
          <Button soft="orange" fontSize="small" size="full">
            Sign in with Facebook
          </Button>
        </div>
      </form>
    </section>
  );
};

export default FormLogin;
