import React from "react";

//management of the 2 select boxes for language selection and for viewing prices
interface Props {
  children: React.ReactNode;

  className?: string;
}
function SelectBox({ children, className }: Props) {
  return (

    <div className={`border-solid border-2 rounded-md border-stone-400 transition-all hover:scale-105 ${className}`}>
      <div className="flex justify-between">
        {/* contenuto sotto della selectbox */}
        {children}
      </div>
    </div>
  );
}

export default SelectBox;
