import {Link} from "react-router-dom";

interface Props {
  icon: string;
  url: string;
  text: string;
  handleToggle: (event: React.MouseEvent<HTMLImageElement>) => any;
}

function EaNavButton({icon, url, text, handleToggle}: Props) {
  return (
    <Link to={url}>
      <div
        onClick={handleToggle}
        className="hover:-translate-y-2 transition-all w-full flex flex-row lg:flex-col mb-4 md:mb-0 justify-start lg:justify-center items-center md:p-8">
        <img className="shrink-0 w-9 h-9 lg:mb-3" src={icon} alt="" />
        <div className="text-white text-lg ml-2 lg:ml-0 shrink-0">{text}</div>
      </div>
    </Link>
  );
}

export default EaNavButton;
