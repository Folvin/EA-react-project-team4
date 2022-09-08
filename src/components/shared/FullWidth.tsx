import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}
function FullWidth({children}: Props) {
  return <div className="-mx-[9.6%]">{children}</div>;
}

export default FullWidth;
