import DesktopNavChild from "./DesktopNavChild";
import {NavLinks} from "../../config/Interfaces";
import {Link} from "react-router-dom";
import DesktopNavChildContent from "./DesktopNavChildContent";
import shortid from "shortid";

interface Props {
  navColor: string;
  textColor: string;
  burgerColor: string;
  hoverColor: string;
  font: string;
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
  font,
  buyButtonColor,
  navLinks,
}: Props) {
  return (
    <div className={`lg:flex ${font} hidden gap-4 justify-center items-center`}>
      {navLinks.map((section) => {
        if (!section.subsections) {
          return (
            <Link
              key={shortid.generate()}
              className={`h-12 md:text-base 2xl:text-lg ${textColor} flex justify-start items-center text-center shrink-0 ${hoverColor}`}
              to={`${section.mainLink}`}>
              {section.main.toUpperCase()}
            </Link>
          );
        } else {
          return (
            <DesktopNavChild
              key={shortid.generate()}
              title={section.main}
              burgerColor={burgerColor}
              navColor={navColor}
              textColor={textColor}
              hoverColor={hoverColor}>
              {section.subsections.map((subsection) => {
                if (!subsection.title) {
                  return (
                    <div key={shortid.generate()} className={`flex flex-col p-6 gap-3`}>
                      {subsection.subTitles.map((subtitle) => {
                        return (
                          <Link
                            key={shortid.generate()}
                            className={`text-sm 2xl:text-base font-tt-regular ${textColor} ${hoverColor} flex items-center h-full`}
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
                      className={`flex rounded flex-col flex-wrap p-6 gap-3`}>
                      <div
                        key={shortid.generate()}
                        className={`${textColor} flex text-base lg:text-lg ${font} flex-start border-b pb-2`}>
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
