import DesktopNavChild from "./DesktopNavChild";
import {NavLinks} from "../config/Interfaces";
import {Link} from "react-router-dom";
import DesktopNavChildContent from "./DesktopNavChildContent";

interface Props {
  navColor: string;
  textColor: string;
  burgerColor: string;
  hoverColor: string;
  logo: string;
  buyButtonColor: string;
  navLinks: NavLinks[];
}

function DesktopNavContainer({
  navColor,
  textColor,
  burgerColor,
  hoverColor,
  logo,
  buyButtonColor,
  navLinks,
}: Props) {
  return (
    <div className="lg:flex hidden gap-4 justify-center items-center">
      {navLinks.map((section) => {
        if (!section.subsections) {
          return (
            <Link
              className={`h-12 text-base ${textColor} flex justify-start items-center ${hoverColor}`}
              to={`${section.mainLink}`}>
              {section.main.toUpperCase()}
            </Link>
          );
        } else {
          return (
            <DesktopNavChild
              title={section.main}
              navColor={navColor}
              textColor={textColor}
              hoverColor={hoverColor}>
              {section.subsections.map((subsection) => {
                if (!subsection.title) {
                  return (
                    <div className="flex flex-col p-6 gap-3">
                      {subsection.subTitles.map((subtitle) => {
                        return (
                          <Link
                            className={`text-base ${textColor} ${hoverColor} flex items-center h-full`}
                            to={subtitle.link}>
                            {subtitle.title}
                          </Link>
                        );
                      })}
                    </div>
                  );
                } else {
                  return (
                    <div className="flex flex-col flex-wrap p-6 gap-3">
                      <div
                        className={`${textColor} flex text-sm flex-start border-b pb-2`}>
                        {subsection.title.toUpperCase()}
                      </div>
                      <DesktopNavChildContent
                        subtitles={subsection.subTitles}
                        hoverColor={hoverColor}
                        textColor={textColor}
                        navColor={navColor}
                      />
                    </div>
                  );
                }
              })}
            </DesktopNavChild>
          );
        }
      })}
    </div>
  );
}

export default DesktopNavContainer;
