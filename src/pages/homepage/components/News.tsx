import {ReactNode} from "react";
import {Link} from "react-router-dom";
import Card from "../../../components/shared/Card";
import Image from "./Image";

interface Props {
  url: string;
  cardImg: string;
  date: string
  author?: string
  children: ReactNode;
}

function News({url, cardImg, children, date, author = "Electronic Arts Inc."}: Props) {
  return (
    <Card styleCard="bg-white border-[#9f9f9f7f] border">
      <Link to={url}>
        <div className="hidden sm:block">
          <Image url={`ultime-notizie/${cardImg}`} />
        </div>
        <div className="flex flex-col p-6">
          <div className="flex justify-between">
            <span className="text-sm font-roboto-bold text-red-500">{author}</span>
            <span className="text-sm font-roboto-bold">{date}</span>
          </div>
          {children}
        </div>
      </Link>
    </Card>
  );
}

export default News;
