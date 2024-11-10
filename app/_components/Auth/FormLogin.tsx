"use client";
import React, { useState, useTransition } from "react";
import { z } from "zod";
import Input from "../Form/Input/Input";
import { Mail, KeyRound } from "lucide-react";
import Button from "../Button/Button";
import Checkbox from "../Form/Checkbox/Checkbox";
import AuthDivider from "./AuthDivider/AuthDivider";
import HeaderFormAuth from "./HeaderFormAuth/HeaderFormAuth";
import Link from "next/link";
import { loginSchema } from "@/app/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { loginUser } from "@/actions/auth";
import Alert from "../Alert/Alert";
import { redirect } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { handleLoginProvider } from "@/app/lib/helper";
const FormLogin = () => {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | null>(null);
  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
  } = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    startTransition(() => {
      loginUser(values).then((data) => {
        if (data?.error) {
          setError(data?.error as string);
        }
        redirect(DEFAULT_LOGIN_REDIRECT);
      });
    });
  };
  return (
    <section className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <HeaderFormAuth
        heading="Sign In"
        description="Enter your email address and password to access admin panel."
      />
      <form className=" flex flex-col gap-6">
        <Input
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          label="Email"
          icon={<Mail className="text-inherit" strokeWidth={1} size={20} />}
          errors={errors}
        />

        <Input
          type="password"
          {...register("password")}
          placeholder="Enter your password"
          label="Password"
          icon={<KeyRound className="text-inherit" strokeWidth={1} size={20} />}
          errors={errors}
        />
        <Link
          href="/auth-password"
          className="-my-3 ml-auto text-sm text-gray-dark hover:text-secondary"
        >
          Reset Password
        </Link>
        <Controller
          name="rememberMe"
          control={control}
          render={({ field: { name, onChange, value } }) => (
            <Checkbox
              label="Remember me"
              name={name}
              checked={value}
              onChange={onChange}
              errors={errors}
            />
          )}
        />
        {error && (
          <Alert icon="info" variant="danger">
            {error}
          </Alert>
        )}
        <Button rounded="xl" size="full" soft="orange" fontSize="small">
          {isPending ? "Logging" : "Sign In"}
        </Button>

        <AuthDivider>OR sign with</AuthDivider>
        <Button
          soft="gray"
          fontSize="small"
          type="button"
          onClick={() => handleLoginProvider("google")}
        >
          Sign in with Google
        </Button>
        <div className="-mt-4 ">
          <Button
            soft="orange"
            fontSize="small"
            size="full"
            type="button"
            onClick={() => handleLoginProvider("github")}
          >
            Sign in with GitHub
          </Button>
        </div>
      </form>
    </section>
  );
};

export default FormLogin;
