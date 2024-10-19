"use client";
import { InputBase } from "@/app/types";
import { useState } from "react";

type InputProps = {
  icon?: JSX.Element;
} & InputBase;

const Input = ({ type, name, placeholder, label, icon }: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <div className="relative top-0 right-0">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className="bg-white text-secondary placeholder:text-secondary border-grayLight border-solid border-[1px] rounded-lg px-4 py-2 text-sm focus:border-secondary outline-0 transition-all duration-200 w-full"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        {icon && (
          <div
            className={`absolute top-1/2 -translate-y-1/2 right-2 transition-all ${
              isFocus ? "text-secondary scale-105" : "text-gray"
            }`}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;