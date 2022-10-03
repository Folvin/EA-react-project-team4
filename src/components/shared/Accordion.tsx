import React, {useState, useRef} from "react";
import {FaChevronDown} from "react-icons/fa";
import {FaChevronUp} from "react-icons/fa";

type AccordionProps = {
  title: string;
  navColor: string;
  burgerColor: string;
  children: React.ReactNode;
};
const Accordion = ({
  title,
  navColor,
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
    setTotalHeight(!isOpened ? "h-fit" : "h-10");
  };

  return (
    <div onClick={HandleOpening} className={`${totalHeight}`}>
      <div
        className={`${navColor} h-9 flex justify-between items text-white border-b border-1 border-solid border-[${burgerColor}]`}>
        <div>{title}</div>
        {isOpened ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <div
        ref={contentElement}
        className={`${navColor} ${height} overflow-hidden transition-all duration-200`}>
        <div className={`${height}`}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
