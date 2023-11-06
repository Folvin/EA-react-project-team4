import {ReactNode} from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function NewsText({title, children}: Props) {
  return (
    <>
      <h2 className="font-roboto-bold text-2xl mt-2">{title}</h2>
      <p className="mt-2 hidden sm:block">{children}</p>
    </>
  );
}

export default NewsText;
