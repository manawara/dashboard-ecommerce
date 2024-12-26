"use client";
import { useCallback, useEffect, useState } from "react";

const useOpenItem = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpenItem = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    handleOpenItem();
  }, [handleOpenItem]);
  return { open, handleOpenItem };
};

export default useOpenItem;
