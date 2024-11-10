"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Form/Input/Input";
import { Mail, KeyRound, User2Icon } from "lucide-react";
import Button from "../Button/Button";
import Checkbox from "../Form/Checkbox/Checkbox";
import AuthDivider from "./AuthDivider/AuthDivider";
import HeaderFormAuth from "./HeaderFormAuth/HeaderFormAuth";
import { registerSchema } from "@/app/lib/zod";
import { useForm, Controller } from "react-hook-form";
import { createUser } from "@/actions/auth";
import { useTransition, useEffect, useState } from "react";
import AlertInfo from "../Alert/Alert";

const FormRegister = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    control,
    reset,
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      termsCondition: false,
    },
  });
  useEffect(() => {
    setError(null);
  }, [isSubmitting]);
  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    setError(null);
    setSuccess(null);
    startTransition(() => {
      createUser(values).then((data) => {
        if (data?.error) {
          setError(data?.error as string);
        } else if (data.success) {
          setSuccess(
            "Thank you for registering with our platform! An activation link has been sent to your registered email address"
          );
          reset();
        }
      });
    });
  };
  console.log(error);
  return (
    <section className="mt-4">
      <HeaderFormAuth
        heading="Sign Up"
        description="New to our platform? Sign up now! It only takes a minute."
      />
      <form className=" flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          {...register("name")}
          placeholder="Enter your name"
          label="Name"
          icon={
            <User2Icon className="text-inherit" strokeWidth={1} size={20} />
          }
          errors={errors}
        />
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
        <Controller
          name="termsCondition"
          control={control}
          render={({ field: { onChange, value, name } }) => (
            <Checkbox
              name={name}
              label="I accept Terms and Condition"
              checked={value}
              onChange={onChange}
              errors={errors}
            />
          )}
        />
        {error && (
          <AlertInfo icon="info" variant="danger">
            {error}
          </AlertInfo>
        )}
        {success && (
          <AlertInfo icon="check" variant="success">
            {success}
          </AlertInfo>
        )}
        <Button rounded="xl" size="full" soft="orange" fontSize="small">
          {isPending ? "Registering " : " Sign Up "}
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
