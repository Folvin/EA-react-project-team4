import Card from "../../../components/shared/Card";
import CardGrid from "../../../components/shared/CardGrid";

function ApexCards() {
  return (
    <div className="bg-[url('../public/assets/pages/apex-legends/card-section-bg.jpg')] bg-cover pb-[8%]">
      <div className="w-full h-fit p-8 flex justify-center items-center">
        <div className="font-teko font-bold text-5xl">ULTIME NOTIZIE</div>
      </div>
      <CardGrid columns="auto-rows-fr md:grid-cols-autoxl gap-5 px-[8%]">
        <div className="">
          <Card styleCard="bg-black h-fit md:max-h-[550px] border-b-8 border-red-600 border-solid">
            <div className="">
              <img src="assets/pages/apex-legends/fight-or-fright-card.jpg" alt="" />
              <div className="p-[5%] w-full flex flex-col gap-1">
                <div className="flex flex-col md:flex-row md:gap-5">
                  <div className="font-teko w-fit text-2xl text-red-600">APEX LEGENDS</div>
                  <div className="font-teko w-fit text-2xl text-white">29-SET-2022</div>
                </div>
                <div className="text-white font-tt-regular text-2xl font-semibold">
                  Paura del buio ritorna con quattro settimane di divertimento da brivido!
                </div>
                <div className="text-white font-tt-regular text-lg">
                  Paura del buio ritorna con quattro settimane di divertimento da brivido!
                </div>
                <div className="h-[180px]"></div>
              </div>
            </div>
          </Card>
        </div>
        <div className="">
          <Card styleCard="bg-black h-full md:max-h-[550px] border-b-8 border-red-600 border-solid">
            <div className="">
              <img src="assets/pages/apex-legends/crosshair-update-card.jpg" alt="" />
              <div className="p-[5%] w-full flex flex-col gap-1">
                <div className="flex flex-col md:flex-row md:gap-5">
                  <div className="font-teko w-fit text-2xl text-red-600">APEX LEGENDS</div>
                  <div className="font-teko w-fit text-2xl text-white">16-SET-2022</div>
                </div>
                <div className="text-white font-tt-regular text-2xl font-semibold">
                  Un aggiornamento sui mirini standard
                </div>
                <div className="text-white font-tt-regular text-lg">
                  Scopri in che modo Apex Legends™ migliorerà l'integrità competitiva dei mirini
                  standard in futuro.
                </div>
                <div className="h-[180px]"></div>
              </div>
            </div>
          </Card>
        </div>
        <div className="">
          <Card styleCard="bg-black h-fit md:max-h-[550px] border-b-8 border-red-600 border-solid">
            <div className="">
              <img src="assets/pages/apex-legends/beast-of-prey-update-card.jpg" alt="" />
              <div className="p-[5%] w-full flex flex-col gap-1">
                <div className="flex flex-col md:flex-row md:gap-5">
                  <div className="font-teko w-fit text-2xl text-red-600">APEX LEGENDS</div>
                  <div className="font-teko w-fit text-2xl text-white">16-SET-2022</div>
                </div>
                <div className="text-white font-tt-regular text-2xl font-semibold">
                  APEX LEGENDS™ - EVENTO COLLEZIONE BESTIE DA CACCIA
                </div>
                <div className="text-white font-tt-regular text-lg">
                  Dal 20 settembre al 4 ottobre, gioca la nuova modalità Corsa alle armi e sblocca
                  il cimelio di Loba.
                </div>
                <div className="h-[180px]"></div>
              </div>
            </div>
          </Card>
        </div>
      </CardGrid>
    </div>
  );
}

export default ApexCards;
