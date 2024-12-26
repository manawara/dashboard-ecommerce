"use client";
import useSessionSidebar from "@/hooks/useSessionSidebar";
import SideBar from "../SideBar/SideBar";
import { ChildrenProp } from "@/types";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const SideBarWrapper = ({ children }: ChildrenProp) => {
  const [showSideBar, handleOpenSideBar] = useSessionSidebar(); // showSideBar is a boolean, handleOpenSideBar is a function
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="flex">
      <SideBar
        onAction={handleOpenSideBar as () => void}
        show={showSideBar as boolean}
      />
      {isReady && (
        <motion.div
          initial={false}
          animate={
            showSideBar
              ? {
                  x: window.innerWidth >= 600 ? 288 : 0,
                }
              : { x: 0 }
          }
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="max-sm:!translate-x-0 mt-16 px-4"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default SideBarWrapper;
