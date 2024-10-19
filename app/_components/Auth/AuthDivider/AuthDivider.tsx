import { ReactNode } from "react";

const AuthDivider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-center font-semibold text-sm w-full flex gap-4 justify-center items-center">
      <div className="w-full h-[1px] bg-gray-light"></div>
      <p className="w-full">{children}</p>

      <div className="w-full h-[1px] bg-gray-light"></div>
    </div>
  );
};

export default AuthDivider;
