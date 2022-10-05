import DesktopNavChild from "./DesktopNavChild";
import {NavLinks} from "../config/Interfaces";
import {Link} from "react-router-dom";
import DesktopNavChildContent from "./DesktopNavChildContent";
import shortid from "shortid";

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
              key={shortid.generate()}
              className={`h-12 md:text-xs 2xl:text-base ${textColor} flex justify-start items-center ${hoverColor}`}
              to={`${section.mainLink}`}>
              {section.main.toUpperCase()}
            </Link>
          );
        } else {
          return (
            <DesktopNavChild
              key={shortid.generate()}
              title={section.main}
              navColor={navColor}
              textColor={textColor}
              hoverColor={hoverColor}>
              {section.subsections.map((subsection) => {
                if (!subsection.title) {
                  return (
                    <div
                      key={shortid.generate()}
                      className="flex flex-col p-6 gap-3">
                      {subsection.subTitles.map((subtitle) => {
                        return (
                          <Link
                            key={shortid.generate()}
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
                    <div
                      key={shortid.generate()}
                      className="flex flex-col flex-wrap p-6 gap-3">
                      <div
                        key={shortid.generate()}
                        className={`${textColor} flex text-xs lg:text-base flex-start border-b pb-2`}>
                        {subsection.title.toUpperCase()}
                      </div>
                      <DesktopNavChildContent
                        key={shortid.generate()}
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
