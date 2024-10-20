import React, { ReactNode } from "react";

const LayoutAuth = ({ children }: { children: ReactNode }) => {
  return <div className="my-4 min-h-screen flex items-center">{children}</div>;
};

export default LayoutAuth;
