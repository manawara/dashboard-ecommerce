"use client";
import { ChevronsRight } from "lucide-react";
import Logo from "@/components/Logo/Logo";
import NavBar from "../NavBar/NavBar";
import { motion } from "motion/react";
import { useContextHamburger } from "@/context/Hamburger";
type SideBarProps = {
  onAction?: () => void;
  show: boolean;
};
const SideBar = ({ onAction, show }: SideBarProps) => {
  const { open } = useContextHamburger();
  return (
    <motion.aside
      className={`flex flex-col fixed top-0 left-0 sm:max-w-[280px] w-full bg-gray-dark-500 min-h-screen text-gray px-6 pb-4 pt-12 z-10`}
      initial={false}
      animate={!open ? { x: 0 } : { x: "-100%" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="flex justify-between items-center mb-5">
        <Logo className="w-24 mx-auto hover:scale-105 transition-transform duration-300" />
        <motion.button
          className="p-1 focus-visible:outline-[1px] focus-visible:outline-gray hidden sm:flex"
          onClick={onAction}
          aria-label="show sidebar"
          initial={false}
          animate={!show ? { rotate: 180 } : { rotate: 0 }}
        >
          <ChevronsRight />
        </motion.button>
      </div>
      <NavBar />
    </motion.aside>
  );
};

export default SideBar;
