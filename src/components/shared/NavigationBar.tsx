import NavBuyButton from "./low-order-component/NavBuyButton";
import {NavLinks, buyButtonConfig} from "../config/Interfaces";
import MobileSidebar from "./low-order-component/MobileSidebar";
import DesktopNavContainer from "./low-order-component/DesktopNavContainer";
import useHideNavbar from "../../hooks/useHideLoginBar";
import {Link} from "react-router-dom";

interface Props {
  navColor: string;
  textColor: string;
  mobileActiveColor: string;
  mobileBorderColor: string;
  hoverColor: string;
  burgerColor: string;
  font: string;
  logo: string;
  free: boolean;
  borderColor?: string;
  mainPage: string;
  buyButtonConfig?: buyButtonConfig;
  buyButtonColor: string;
  navLinks: NavLinks[];
  mobileSidebarHeaderColor: string;
}

function NavigationBar({
  navColor,
  textColor,
  font,
  mobileBorderColor,
  mobileActiveColor,
  burgerColor,
  mainPage,
  hoverColor,
  logo,
  free,
  buyButtonConfig,
  buyButtonColor,
  navLinks,
  mobileSidebarHeaderColor,
}: Props) {
  /* Custom hook that handles the hiding and showing of the NavBarEA on scroll */

  const {handleShow} = useHideNavbar();

  return (
    <div
      className={`h-14 w-full flex justify-between fixed ${
        handleShow ? "top-10" : "top-0"
      } z-10 gap-x-2 sm:gap-x-8 items-center ${navColor}`}>
      <div className="flex gap-3 items-center">
        {/* Mobile sidebar */}
        <MobileSidebar
          burgerColor={burgerColor}
          navColor={navColor}
          textColor={textColor}
          logo={logo}
          font={font}
          mobileBorderColor={mobileBorderColor}
          buyButtonColor={buyButtonColor}
          mobileActiveColor={mobileActiveColor}
          navLinks={navLinks}
          mobileSidebarHeaderColor={mobileSidebarHeaderColor}
        />
        <Link className="h-14 flex min-w-[80px] items-center xl:max-w-none" to={`${mainPage}`}>
          <img className="h-8 object-contain w-full" src={`${logo}`} alt="" />
        </Link>
        <DesktopNavContainer
          navColor={navColor}
          font={font}
          textColor={textColor}
          hoverColor={hoverColor}
          burgerColor={burgerColor}
          logo={logo}
          buyButtonColor={buyButtonColor}
          navLinks={navLinks}
        />
      </div>
      <div>
        {buyButtonConfig && <NavBuyButton
          buyButtonColor={buyButtonColor}
          buyButtonConfig={buyButtonConfig}
          textColor={textColor}
          free={free}
        />}
      </div>
    </div>
  );
}

export default NavigationBar;
