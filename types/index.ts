import { type ReactNode } from "react";
import { FieldValues, FieldErrors } from "react-hook-form";

export type InputBase = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  errors?: FieldErrors<FieldValues>;
};

export type ChildrenProp = {
  children: ReactNode;
};

export type ItemsArrayName = {
  items?: Array<{
    name: string;
    children?: Array<{ name: string }>;
  }>;
};
