import { ChildrenProp } from "@/types";
import React, { createContext, useContext, useState } from "react";

const HamburgerContext = createContext({ open: false });

export const useContextHamburger = () => {
  const ctx = useContext(HamburgerContext);
  if (!ctx) {
    throw new Error(
      "useContextHamburger has to be used within <ContextHamburger.Provider>"
    );
  }
  return ctx;
};
const HamburgerProvider = ({ children }: ChildrenProp) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const ctx = {
    open,
    handleOpen,
  };
  return (
    <HamburgerContext.Provider value={ctx}>
      {children}
    </HamburgerContext.Provider>
  );
};

export default HamburgerProvider;
