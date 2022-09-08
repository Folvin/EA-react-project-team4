import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Section({children, className}: Props) {
  return <section className={`px-[8%] ${className}`}>{children}</section>;
}

export default Section;
