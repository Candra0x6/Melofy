import React, { useEffect, useState } from "react";

function scrollHandle() {
  const [prevNav, setprevNav] = useState<number>(0);
  const [visibleNav, setvisibleNav] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setvisibleNav(prevNav > currentScroll || currentScroll < 10);
      setprevNav(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevNav]);
  return {
    visibleNav,
  };
}

export default scrollHandle;
