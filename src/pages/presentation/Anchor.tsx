import {ReactNode} from "react";

interface Props {
  children: ReactNode;
  url: string;
}
function Anchor({url, children}: Props) {
  return (
    <a className="underline decoration-blue-600 decoration-1 underline-offset-1 hover:text-blue-600 font-bold" href={url}>
      {children}
    </a>
  );
}

export default Anchor;
