import {Link} from "react-router-dom";
import {Subtitles} from "../config/Interfaces";
import shortid from "shortid";

interface Props {
  navColor: string;
  textColor: string;
  hoverColor: string;
  subtitles: Subtitles[];
}

function DesktopNavChildContent({
  navColor,
  textColor,
  hoverColor,
  subtitles,
}: Props) {
  return (
    <div className="flex flex-col gap-3">
      {subtitles.map((subtitle) => {
        return (
          <div key={shortid.generate()}>
            <Link
              key={shortid.generate()}
              className={`text-base ${textColor} ${hoverColor} flex items-center h-full`}
              to={subtitle.link}>
              {subtitle.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default DesktopNavChildContent;
