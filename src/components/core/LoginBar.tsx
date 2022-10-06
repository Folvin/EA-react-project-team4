import {useRef} from "react";
import {Link} from "react-router-dom";
import useHideLoginBar from "../../hooks/useHideLoginBar";
import useLoginBar from "../../hooks/useLoginBar";
import LoginHelp from "./low-order-component/LoginHelp";
import LoginNotLoggedIn from "./low-order-component/LoginNotLoggedIn";

function NavBarEA() {
  /* Ref used to handle the function in the hook that handles the closing of the menus when clicking outside */

  const menuRef = useRef<HTMLDivElement>(null);

  /* Custom hook that handles the hiding and showing of the NavBarEA on scroll */

  const {handleShow} = useHideLoginBar();

  /* Custom Hook that handles all of the code for the NavBarEA component and all of its children */

  const {userMenu, helpMenu, handleToggle} = useLoginBar(menuRef);

  return (
    <div className="font-tt-regular" ref={menuRef}>
      <div
        className={`h-10 w-full flex fixed justify-end ${
          handleShow ? "top-0" : "-top-10"
        } z-50 gap-x-8 items-center bg-eaBlack-100`}>
        <img
          onClick={handleToggle}
          id="user"
          className="w-6 h-full object-contain cursor-pointer hover:brightness-200"
          src="assets/core/UserNavIcon.png"
          alt=""
        />
        <img
          onClick={handleToggle}
          id="help"
          className="w-5 h-full object-contain cursor-pointer hover:brightness-200"
          src="assets/core/QuestionMarkNavIcon.png"
          alt=""
        />
        <Link className="h-full mr-8" to="/homepage">
          <img
            onClick={handleToggle}
            className="w-9 h-full object-contain cursor-pointer hover:brightness-125"
            src="assets/core/EANavIcon.png"
            alt=""
          />
        </Link>
      </div>
      <div>
        {/* User Menu Component */}
        <LoginNotLoggedIn pos={userMenu} handleToggle={handleToggle} />
        {/* Help Area Component */}
        <LoginHelp pos={helpMenu} handleToggle={handleToggle} />
      </div>
    </div>
  );
}

export default NavBarEA;
