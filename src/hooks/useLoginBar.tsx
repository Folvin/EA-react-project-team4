import {useCallback, useEffect, useState} from "react";

function useNavBarEAHook(menuRef: any) {
  /* States that control the NavBarEA menus */

  const [userMenu, setUserMenu] = useState("top-[-400px]");

  const [helpMenu, setHelpMenu] = useState("top-[-400px]");

  /* Function to handle the opening and closing of the NavBarEA menus */

  function handleToggle(event: React.MouseEvent<HTMLImageElement>) {
    let target = event.target as HTMLImageElement;

    if (target.id === "user") {
      if (helpMenu === "top-10") {
        setHelpMenu("top-[-400px]");
        document.body.style.overflow = "unset";
      }

      if (userMenu === "top-[-400px]") {
        setUserMenu("top-10");
        document.body.style.overflow = "hidden";
      } else {
        setUserMenu("top-[-400px]");
        document.body.style.overflow = "unset";
      }
    } else if (target.id === "help") {
      if (userMenu === "top-10") {
        setUserMenu("top-[-400px]");
        document.body.style.overflow = "unset";
      }

      if (helpMenu === "top-[-400px]") {
        setHelpMenu("top-10");
        document.body.style.overflow = "hidden";
      } else {
        setHelpMenu("top-[-400px]");
        document.body.style.overflow = "unset";
      }
    } else {
      setHelpMenu("top-[-400px]");
      setUserMenu("top-[-400px]");
      document.body.style.overflow = "unset";
    }
  }

  /* Side effect and function to handle the closing of the NavBarEA menus when clicking outside of the navbar itself */

  const handleOutsideClicks = useCallback(
    (event: any) => {
      if (
        (userMenu === "top-10" || helpMenu === "top-10") &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setUserMenu("top-[-400px]");
        setHelpMenu("top-[-400px]");
        document.body.style.overflow = "unset";
      }
    },
    [helpMenu, menuRef, userMenu]
  );
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClicks);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClicks);
    };
  }, [userMenu, helpMenu, handleOutsideClicks]);

  return {
    userMenu,
    helpMenu,
    handleToggle,
    setUserMenu,
    setHelpMenu,
  };
}

export default useNavBarEAHook;
