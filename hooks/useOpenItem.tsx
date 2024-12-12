"use client";
import { useCallback, useEffect, useState } from "react";

const useOpenItem = () => {
  const [open, setOpen] = useState<boolean>(false);
  console.log(open);
  const handleOpenItem = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    handleOpenItem();
  }, [handleOpenItem]);
  return { open, handleOpenItem };
};

export default useOpenItem;
