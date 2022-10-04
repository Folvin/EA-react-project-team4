import {FaChevronDown} from "react-icons/fa";

type DesktopNavChildProps = {
  title: string;
  navColor: string;
  textColor: string;
  hoverColor: string;
  children: React.ReactNode;
};

function DesktopNavChild({
  title,
  navColor,
  textColor,
  hoverColor,
  children,
}: DesktopNavChildProps) {
  return (
    <button
      className={`group w-fit z-10 relative flex gap-2 justify-center items-center bg-transparent h-12 ${hoverColor} ${textColor}`}>
      {title.toUpperCase()} <FaChevronDown className={`mt-1 text-inherit`} />
      <div className="hidden group-hover:block absolute top-100% h-20 w-full z-30"></div>
      <div
        className={`hidden absolute top-[120%] z-30 rounded w-max group-hover:flex hover:flex flex-row ${navColor}`}>
        {children}
      </div>
    </button>
  );
}

export default DesktopNavChild;
