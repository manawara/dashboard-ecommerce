"use client";

import { InputBase } from "@/app/types";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

const Checkbox = ({ label, name }: InputBase) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div
      className="cursor-pointer inline-flex max-w-max items-center gap-4"
      onClick={handleCheckbox}
    >
      <input
        type="checkbox"
        className="hidden"
        name={name}
        id={name}
        defaultChecked={isChecked}
      />
      <div
        className={`size-3 p-2 border-[1px] border-gray-light hover:border-bg-primary rounded-sm relative top-0 left-0 transition-all duration-300 hover:scale-110 ${
          isChecked ? "bg-primary" : ""
        }`}
      >
        <CheckIcon
          strokeWidth={3}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 text-white"
        />
      </div>
      <span className="text-sm cursor-pointer">{label}</span>
    </div>
  );
};

export default Checkbox;
