import React from "react";

//management of the 2 select boxes for language selection and for viewing prices
interface Props {
  children: React.ReactNode;
  title: React.ReactNode;
  className?: string;
}
function SelectBox({children, title, className}: Props) {
  return (
    <div
      className={`px-4 py-2 border-solid border-2 rounded-md border-stone-400 ${className}`}>
      <div className="text-stone-600">{title}</div>
      <div className="mt-1 flex justify-between">
        {children} <img src="assets/global/caret-down.png" alt="" />
      </div>
    </div>
  );
}

export default SelectBox;
