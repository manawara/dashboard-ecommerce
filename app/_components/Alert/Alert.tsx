import { cva, type VariantProps } from "class-variance-authority";
import { Info, X, XCircleIcon, BadgeCheck } from "lucide-react";
import React, { ReactElement, ReactNode, useState } from "react";

const alert = cva(["rounded-lg text-black text-sm"], {
  variants: {
    variant: {
      primary: ["bg-primary-soft"],
      secondary: ["bg-secondary-soft"],
      success: ["bg-green-soft"],
      danger: ["bg-red-100"],
      warning: ["bg-yellow-soft"],
      info: ["bg-blue-soft"],
      light: ["bg-gray-200"],
      dark: ["bg-gray-500"],
    },
  },
});

const iconColorMap: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-green",
  danger: "bg-red",
  warning: "bg-yellow",
  info: "bg-blue",
};

const iconList: Record<string, ReactElement> = {
  info: <Info size={16} />,
  close: <XCircleIcon size={16} />,
  check: <BadgeCheck size={16} />,
} as const;
type IconType = "info" | "close" | "check";

type AlertProps = {
  children: ReactNode;
  icon?: IconType;
  close?: boolean;
} & VariantProps<typeof alert>;
const Alert = ({ children, icon, close, variant = "primary" }: AlertProps) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleCloseAlert = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsShow(false);
      setIsAnimating(false);
    }, 300);
  };
  return (
    <>
      {isShow && (
        <div
          className={`${alert({
            variant,
          })} flex items-center justify-between duration-300 transition-all ease-out ${
            isAnimating
              ? "opacity-0 -translate-y-2 "
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="py-3 px-4 flex gap-2 items-center">
            {icon && iconColorMap[variant as string] && (
              <div
                className={`p-2  rounded-xl  text-white ${
                  iconColorMap[variant as string]
                }`}
              >
                {iconList[icon]}
              </div>
            )}
            {children}
          </div>
          {close && (
            <div className="px-2">
              <X
                size={18}
                className="cursor-pointer"
                onClick={handleCloseAlert}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Alert;
