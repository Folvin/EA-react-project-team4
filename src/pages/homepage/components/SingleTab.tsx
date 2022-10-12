import {Tab} from "@headlessui/react";
import {Fragment, ReactNode} from "react";

interface Props {
  children: ReactNode;
}
function SingleTab({children}: Props) {
  return (
    <Tab as={Fragment}>
      {({selected}) => (
        <button
          className={
            selected
              ? "h-10 transition-all grow shrink-0 border-b-2 border-b-red-600 bg-gray-300 focus:outline-0"
              : "h-10 transition-all grow shrink-0 bg-[#F3F3F3] hover:bg-gray-300"
          }>
          {children}
        </button>
      )}
    </Tab>
  );
}

export default SingleTab;
