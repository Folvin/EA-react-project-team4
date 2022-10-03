import {AiOutlineCloseCircle} from "react-icons/ai";
import {Link} from "react-router-dom";
import {NavLinks} from "../config/Interfaces";
import Accordion from "./Accordion";

interface Props {
  navColor: string;
  textColor: string;
  burgerColor: string;
  logo: string;
  buyButtonColor: string;
  navLinks: NavLinks[];
  mobileSidebarHeaderColor: string;
}

function MobileSidebar({
  navColor,
  textColor,
  burgerColor,
  logo,
  buyButtonColor,
  navLinks,
  mobileSidebarHeaderColor,
}: Props) {
  return (
    <div>
      <div>
        <button className="block lg:hidden ml-1" title="burgerMenu">
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
        <div
          className={`absolute top-0 left-0 w-screen ${navColor} bg-opacity-70 z-20 h-[97vh]`}></div>
      </div>
      <div
        className={`absolute flex justify-between items-center top-0 left-0 w-[66vw] ${mobileSidebarHeaderColor} z-[60] h-14`}>
        <img className="ml-3 h-6 w-12 lg:ml-12" src={`${logo}`} alt="" />
        <AiOutlineCloseCircle
          className={`w-[38px] h-[38px] mr-3 ${textColor}`}
        />
      </div>
      <div
        className={`${textColor} absolute h-[88.6vh] w-[66vw] py-3 px-5 top-0 mt-14 z-50 flex flex-col gap-3 align-center ${navColor}`}>
        {navLinks.map((section) => {
          if (!section.subsections) {
            return (
              <div className="flex justify-start items-center">
                <Link to={`${section.mainLink}`}>{section.main}</Link>
              </div>
            );
          } else {
            return (
              <div>
                <Accordion
                  title={section.main}
                  burgerColor={burgerColor}
                  navColor={navColor}>
                  <div className="text-base">This is a test</div>
                  <div className="text-base">This is a test</div>
                </Accordion>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default MobileSidebar;
