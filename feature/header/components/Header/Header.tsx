"use client";
import { useContextHamburger } from "@/context/Hamburger";
import { ListMinus } from "lucide-react";
import React from "react";

const Header = () => {
  const { handleOpen } = useContextHamburger();
  return (
    <header className="fixed top-0 z-20 p-4">
      <ListMinus
        className="cursor-pointer hover:scale-105 duration-300"
        size={30}
        onClick={handleOpen}
      />
    </header>
  );
};

export default Header;
