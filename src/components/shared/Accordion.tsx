import React, {useState, useRef} from "react";
import {FaChevronDown} from "react-icons/fa";
import {FaChevronUp} from "react-icons/fa";

type AccordionProps = {
  title: string;
  navColor: string;
  burgerColor: string;
  hoverColor: string;
  children: React.ReactNode;
};
const Accordion = ({
  title,
  navColor,
  hoverColor,
  burgerColor,
  children,
}: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("h-0");
  const [totalHeight, setTotalHeight] = useState<string>("h-10");
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `h-fit` : "h-0");
    setTotalHeight(!isOpened ? "h-fit" : "h-9");
  };

  return (
    <div className={`${totalHeight}`}>
      <div
        onClick={HandleOpening}
        className={`${navColor} h-9 flex justify-between border-b border-1 cursor-pointer border-solid border-[${burgerColor}] ${
          isOpened ? `${hoverColor}` : ""
        }`}>
        <div className="text-lg">{title}</div>
        {isOpened ? (
          <FaChevronUp
            className={`mt-1 ${
              isOpened
                ? `${hoverColor}`
                : burgerColor === "#FFFFFF"
                ? "text-white"
                : "text-black"
            }`}
          />
        ) : (
          <FaChevronDown
            className={`mt-1 ${
              burgerColor === "#FFFFFF" ? "text-white" : "text-black"
            }`}
          />
        )}
      </div>
      <div
        ref={contentElement}
        className={`${navColor} ${height} overflow-hidden transition-all duration-200`}>
        <div className={`${height} mt-2`}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
