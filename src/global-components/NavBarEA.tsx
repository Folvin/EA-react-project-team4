import { useRef } from "react";
import { Link } from "react-router-dom";
import UseNavBarEAHook from "../global-hooks/UseNavBarEAHook";
import NavHelp from "./NavHelp";
import NavUserNotLoggedIn from "./NavUserNotLoggedIn";

function NavBarEA() {

    const menuRef = useRef<HTMLDivElement>(null);

    const {userMenu, helpMenu, handleToggle} = UseNavBarEAHook(menuRef);

    return (
        <div ref={menuRef}>
            <div className="h-10 w-full flex justify-end fixed top-0 z-50 gap-x-8 items-center bg-eaBlack-100">
                <img onClick={handleToggle} id="user" className="w-6 h-6 cursor-pointer hover:brightness-200" src="assets/global/UserNavIcon.png" alt="" />
                <img onClick={handleToggle} id="help" className="w-5 h-5 cursor-pointer hover:brightness-200" src="assets/global/QuestionMarkNavIcon.png" alt="" />
                <Link to="/"><img onClick={handleToggle} className="w-9 h-5 mr-8 cursor-pointer hover:brightness-125" src="assets/global/EANavIcon.png" alt="" /></Link>
            </div>
            <div>
                {/* Componente Area Utente */}
                <NavUserNotLoggedIn pos={userMenu} handleToggle={handleToggle} />
                {/* Componente Area Aiuto */}
                <NavHelp pos={helpMenu} handleToggle={handleToggle} />
            </div>
        </div>

    );
}

export default NavBarEA;