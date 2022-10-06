import NavBarEA from "../../components/core/NavBarEA";
import NavigationBar from "../../components/shared/NavigationBar";
import Section from "../../components/shared/Section";
import F1Config from "./F1Config";
import HeroBanner from "./HeroBanner";
import { LoadMoreContent, containerCard } from "./Card";

import VideoSection from "./VideoSection";



function F1() {
  return (
    <div className="">

      
      <HeroBanner />
      <VideoSection />
      <h1 className="text-center font-f1-bold 2xl:text-5xl py-4 2xl:pt-28 2xl:pb-8">ULTIME NOTIZIE</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
      
        <LoadMoreContent container={containerCard} />
      </div>









    </div>
  )
}

export default F1;







