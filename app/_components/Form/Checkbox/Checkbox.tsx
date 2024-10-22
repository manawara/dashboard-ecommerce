"use client";

import { InputBase } from "@/app/types";
import { CheckIcon } from "lucide-react";
import { forwardRef } from "react";
import InputError from "../InputError/InputError";

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
} & InputBase;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, name, checked, errors, onChange, ...rest }, ref) => {
    return (
      <div className="cursor-pointer inline-flex items-center gap-4 relative mb-2">
        <label className="cursor-pointer inline-flex items-center gap-4">
          <input
            type="checkbox"
            className="hidden peer"
            id={name}
            name={name}
            ref={ref}
            checked={checked}
            onChange={onChange}
            {...rest}
          />
          <div
            className={`size-3 p-2 border-[1px] border-gray-light hover:border-bg-primary rounded-sm relative top-0 left-0 transition-all duration-300 hover:scale-110 peer-checked:bg-primary
            }`}
          >
            <CheckIcon
              strokeWidth={3}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 text-white"
            />
          </div>
          <span className="text-sm cursor-pointer">{label}</span>
        </label>
        <div className="absolute -bottom-5 w-full mt-[1px]">
          <InputError errors={errors ? errors : {}} name={name} />
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
