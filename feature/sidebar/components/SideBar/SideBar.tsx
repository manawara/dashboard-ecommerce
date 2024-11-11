import React from "react";
import { ChevronsRight } from "lucide-react";
import Logo from "@/components/Logo/Logo";

const SideBar = () => {
  return (
    <aside className="flex flex-col fixed top-0 left-0 max-w-[280px] w-full bg-gray-dark min-h-screen text-gray px-6 py-4">
      <div className="flex justify-between items-center">
        <Logo />
        <button className="p-1 focus-visible:outline-[1px] focus-visible:outline-gray">
          <ChevronsRight />
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
