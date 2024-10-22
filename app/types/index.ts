import { FieldValues, FieldErrors } from "react-hook-form";

export type InputBase = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  errors?: FieldErrors<FieldValues>;
};
