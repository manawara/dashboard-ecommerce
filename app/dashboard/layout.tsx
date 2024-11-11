import SideBar from "@/feature/sidebar/components/SideBar/SideBar";
import { ChildrenProp } from "../../types";

const DashboardLayout = ({ children }: ChildrenProp) => {
  return (
    <main className="w-full min-h-screen">
      <SideBar />
      <div className="flex-1">{children}</div>
    </main>
  );
};

export default DashboardLayout;
