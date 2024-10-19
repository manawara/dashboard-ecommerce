import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { button } from "./variants";
import Image from "next/image";

type ButtonProps = VariantProps<typeof button> & {
  children?: ReactNode;
  icon?: string;
};

const Button = ({
  children,
  color,
  outline,
  rounded,
  size,
  fontSize,
  soft,
  icon,
}: ButtonProps) => {
  return (
    <button
      className={button({ color, rounded, outline, size, soft, fontSize })}
    >
      {icon && (
        <Image src={icon} height={17} className="!fill-blue" alt={icon} />
      )}
      {children}
    </button>
  );
};

export default Button;
