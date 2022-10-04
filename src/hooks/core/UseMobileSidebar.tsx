import {useCallback, useEffect, useState} from "react";

function useMobileSidebar(sidebarRef: any) {
  /* States that control the mobile sidebar */

  const [sidebarOpen, setSidebarOpen] = useState<string>("left-[-66vw]");

  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

  /* Function to handle the opening and closing of the MobileSidebar */

  function handleToggle(event: any) {
    let target = event.target as any;

    if (target.id !== "cross") {
      setSidebarOpen("left-0");
      setIsOverlayOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setSidebarOpen("left-[-66vw]");
      setIsOverlayOpen(false);
      document.body.style.overflow = "unset";
    }
  }

  /* Side effect and function to handle the closing of MobileSidebar when clicking outside of the sidebar itself */

  const handleOutsideClicks = useCallback(
    (event: any) => {
      if (
        sidebarOpen === "left-0" &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen("left-[-66vw]");
        setIsOverlayOpen(false);
        document.body.style.overflow = "unset";
      }
    },
    [sidebarOpen, sidebarRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClicks);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClicks);
    };
  }, [sidebarOpen, handleOutsideClicks]);

  return {
    handleToggle,
    setIsOverlayOpen,
    isOverlayOpen,
    sidebarOpen,
  };
}

export default useMobileSidebar;
