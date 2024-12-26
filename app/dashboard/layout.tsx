"use client";
import Header from "@/feature/header/components/Header/Header";
import { ChildrenProp } from "../../types";
import SideBarWrapper from "@/feature/sidebar/components/SideBarWrapper/SideBarWrapper";
import HamburgerProvider from "@/context/Hamburger";
const DashboardLayout = ({ children }: ChildrenProp) => {
  return (
    <div className="w-full min-h-screen">
      <HamburgerProvider>
        <Header />
        <SideBarWrapper>{children}</SideBarWrapper>
      </HamburgerProvider>
    </div>
  );
};

export default DashboardLayout;
