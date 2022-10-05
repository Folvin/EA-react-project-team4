import {useRef} from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {Transition} from "@headlessui/react";
import {Link} from "react-router-dom";
import useMobileSidebar from "../../hooks/core/UseMobileSidebar";
import {NavLinks} from "../config/Interfaces";
import Accordion from "./Accordion";
import shortid from "shortid";
import useHideNavbar from "../../hooks/core/useHideNavbar";

interface Props {
  navColor: string;
  textColor: string;
  burgerColor: string;
  mobileActiveColor: string;
  mobileBorderColor: string;
  logo: string;
  buyButtonColor: string;
  navLinks: NavLinks[];
  mobileSidebarHeaderColor: string;
}

function MobileSidebar({
  navColor,
  textColor,
  burgerColor,
  mobileActiveColor,
  logo,
  mobileBorderColor,
  buyButtonColor,
  navLinks,
  mobileSidebarHeaderColor,
}: Props) {
  /* Ref used to handle the function in the hook that handles the closing of the sidebar when clicking outside */

  const sidebarRef = useRef<HTMLDivElement>(null);

  /* Custom Hook that handles the visibility for the MobileSidebar component and the overlay under it */

  const {sidebarOpen, isOverlayOpen, handleToggle} =
    useMobileSidebar(sidebarRef);

  /* Custom hook that handles the hiding and showing of the NavBarEA on scroll */

  const {handleShow} = useHideNavbar();

  return (
    <div>
      <div>
        <button
          onClick={handleToggle}
          id="burger-menu"
          className="block lg:hidden ml-1"
          title="burgerMenu">
          <svg
            height="38px"
            version="1.1"
            viewBox="0 0 512 512"
            width="38px"
            stroke={`${burgerColor}`}
            fill={`${burgerColor}`}
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <g>
              <g>
                <path d="M424,394H89c-4.418,0-8-3.582-8-8s3.582-8,8-8h335c4.418,0,8,3.582,8,8S428.418,394,424,394z" />
              </g>
              <g>
                <path d="M424,265H89c-4.418,0-8-3.582-8-8c0-4.418,3.582-8,8-8h335c4.418,0,8,3.582,8,8C432,261.418,428.418,265,424,265z" />
              </g>
              <g>
                <path d="M424,135H89c-4.418,0-8-3.582-8-8s3.582-8,8-8h335c4.418,0,8,3.582,8,8S428.418,135,424,135z" />
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div className="lg:hidden">
        <div
          className={`absolute top-0 left-0 w-screen bg-black bg-opacity-70 z-50 h-screen ${
            !isOverlayOpen ? "hidden" : ""
          }`}></div>
        <div
          ref={sidebarRef}
          className={`absolute top-0 ${sidebarOpen} h-screen w-[66vw] z-[100]`}>
          <Transition
            appear={true}
            show={isOverlayOpen}
            enter="transform transition ease-in-out duration-2000"
            enterFrom="-translate-x-2/3"
            enterTo="translate-x-0"
            leave="ease-in-out duration-2000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div
              key={shortid.generate()}
              className={`absolute flex justify-between items-center top-0 left-0 min-w-[320px] w-[75vw] ${mobileSidebarHeaderColor} z-[100] h-14`}>
              <img className="ml-3 h-6 w-12 lg:ml-12" src={`${logo}`} alt="" />
              <AiOutlineCloseCircle
                onClick={handleToggle}
                id="cross"
                className={`w-[38px] h-[38px] cursor-pointer mr-3 ${textColor}`}
              />
            </div>
            <div
              key={shortid.generate()}
              className={`${textColor} absolute ${
                handleShow ? "h-[calc(100vh-96px)]" : "h-[calc(100vh-40px)]"
              } w-[75vw] min-w-[320px] pt-3 pb-6 px-4 top-0 mt-14 z-50 flex flex-col gap-3 overflow-scroll align-center ${navColor}`}>
              {navLinks.map((section) => {
                if (!section.subsections) {
                  return (
                    <Link
                      key={shortid.generate()}
                      className={`h-9 pb-2 text-base md:text-lg flex justify-start items-center border-b border-1 border-solid border-[${burgerColor}]`}
                      to={`${section.mainLink}`}>
                      {section.main.toUpperCase()}
                    </Link>
                  );
                } else {
                  return (
                    <div key={shortid.generate()}>
                      <Accordion
                        key={shortid.generate()}
                        title={section.main}
                        burgerColor={burgerColor}
                        mobileActiveColor={mobileActiveColor}
                        mobileBorderColor={mobileBorderColor}
                        navColor={navColor}>
                        {section.subsections.map((subsection) => {
                          if (!subsection.title) {
                            return (
                              <div
                                key={shortid.generate()}
                                className="flex flex-col gap-2 mt-2 px-2">
                                {subsection.subTitles.map((subtitle) => {
                                  return (
                                    <Link
                                      key={shortid.generate()}
                                      className={`pb-1 border-b text-base flex items-center h-9 border-1 border-solid border-[${burgerColor}]`}
                                      to={subtitle.link}>
                                      {subtitle.title}
                                    </Link>
                                  );
                                })}
                              </div>
                            );
                          } else {
                            return (
                              <div
                                key={shortid.generate()}
                                className="px-2 py-1">
                                <Accordion
                                  key={shortid.generate()}
                                  title={subsection.title}
                                  burgerColor={burgerColor}
                                  mobileBorderColor={mobileBorderColor}
                                  mobileActiveColor={mobileActiveColor}
                                  navColor={navColor}>
                                  {subsection.subTitles.map((subtitle) => {
                                    return (
                                      <div
                                        key={shortid.generate()}
                                        className="px-2">
                                        <Link
                                          key={shortid.generate()}
                                          className={`pb-1 my-1 text-base border-b flex items-center h-9 border-1 border-solid border-[${burgerColor}]`}
                                          to={subtitle.link}>
                                          {subtitle.title}
                                        </Link>
                                      </div>
                                    );
                                  })}
                                </Accordion>
                              </div>
                            );
                          }
                        })}
                      </Accordion>
                    </div>
                  );
                }
              })}
              <button
                title="spacer"
                className={`cursor-default grow shrink-0`}></button>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
