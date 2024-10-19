import React from "react";
import Input from "../Form/Input/Input";
import { Mail, KeyRound } from "lucide-react";
import Button from "../Button/Button";
import Checkbox from "../Form/Checkbox/Checkbox";
import AuthDivider from "./AuthDivider/AuthDivider";
import facebookIcon from "@/public/facebook.svg";
const FormLogin = () => {
  return (
    <section className="mt-4">
      <h1 className="font-semibold text-2xl text-blueDark">Sign In</h1>
      <p className="text-sm font-medium mt-2 mb-5">
        Enter your email address and password to access admin panel.
      </p>
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

        <Button rounded="xl" size="full" soft="orange">
          Sign In
        </Button>

        <AuthDivider>OR sign with</AuthDivider>
      </form>
    </section>
  );
};

export default FormLogin;
