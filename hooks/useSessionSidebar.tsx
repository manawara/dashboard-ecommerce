import { DASHBOARD_CONFIG } from "@/lib/helper";
import { useEffect, useState } from "react";

export const useSessionSidebar = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  useEffect(() => {
    const existingConfig = window.sessionStorage.getItem(DASHBOARD_CONFIG);

    if (existingConfig) {
      const config = JSON.parse(existingConfig);

      if (config.menu?.size === "hover") {
        setShowSideBar(true);
      }
    }
  }, []);
  const handleOpenSideBar = () => {
    const existingConfig = window.sessionStorage.getItem(DASHBOARD_CONFIG);
    setShowSideBar((prev) => !prev);
    const config = existingConfig ? JSON.parse(existingConfig) : {};
    let updatedConfig = {
      ...config,
      menu: {
        size: "hover",
      },
    };
    if (!showSideBar) {
      window.sessionStorage.setItem(
        "__DASHBOARD_CONFIG__",
        JSON.stringify(updatedConfig)
      );
    } else {
      updatedConfig = {
        ...config,
        menu: {
          size: "",
        },
      };
      window.sessionStorage.setItem(
        "__DASHBOARD_CONFIG__",
        JSON.stringify(updatedConfig)
      );
    }
  };

  return [showSideBar, handleOpenSideBar];
};

export default useSessionSidebar;
