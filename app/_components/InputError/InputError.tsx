import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

type InputErrorProps = {
  errors: FieldErrors<FieldValues>;
  name: string;
};
const InputError = ({ errors, name }: InputErrorProps) => {
  return (
    <div className="-mt-4 text-red text-xs ">
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="error-text">{message}</p>}
      />
    </div>
  );
};

export default InputError;
