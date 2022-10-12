import Section from "../../../components/shared/Section";

function BattleRoyaleSection() {
  return (
    <div>
      <Section className="pb-12 bg-cover bg-[url('../public/assets/pages/apex-legends/battle-royale-mobile.jpg')] sm:bg-[url('../public/assets/pages/apex-legends/battle-royale-tablet.jpg')] md:bg-[url('../public/assets/pages/apex-legends/battle-royale.jpg')]">
        <div className="w-full h-fit p-8 flex justify-center items-center">
          <div className="font-teko font-bold text-center text-white text-5xl">
            OLTRE LA BATTLE ROYALE
          </div>
        </div>
        <div className="w-full h-fit px-[16%] pb-8 flex justify-center items-center">
          <div className="font-tt-regular text-center text-white text-xl">
            Dimostra di avere la stoffa per vincere in Apex Legends™, uno sparatutto gratuito in cui
            combattenti venuti da ogni angolo della Frontiera si sfidano per fama, gloria e
            ricchezza.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start md:flex-row md:flex-wrap gap-12">
          <div className="flex flex-col justify-start items-center max-w-[440px] md:max-w-[280px] gap-5">
            <img className="" src="assets/pages/apex-legends/trophy-logo.png" alt="trophy" />
            <div className="font-tt-regular font-semibold text-center text-white text-2xl">
              Personaggi Leggendari
            </div>
            <div className="font-tt-regular text-center text-white text-lg">
              Troverai tanti personaggi, ciascuno dei quali con una storia, delle abilità e uno
              stile diversi.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center max-w-[440px] md:max-w-[280px] gap-5">
            <img className="" src="assets/pages/apex-legends/gun-logo.png" alt="trophy" />
            <div className="font-tt-regular font-semibold text-center text-white text-2xl">
              La squadra definitiva
            </div>
            <div className="font-tt-regular text-center text-white text-lg">
              Scegli una leggenda, unisciti ad altri giocatori e insieme combinate le vostre
              formidabili abilità per dar vita alla squadra definitiva.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center max-w-[440px] md:max-w-[280px] gap-5">
            <img className="" src="assets/pages/apex-legends/headshot-logo.png" alt="trophy" />
            <div className="font-tt-regular font-semibold text-center text-white text-2xl">
              Combattimento strategico
            </div>
            <div className="font-tt-regular text-center text-white text-lg">
              Padroneggia un elenco in continua espansione di potenti armi, abilità e accessori in
              una varietà di mappe e modalità permanenti e a tempo limitato.
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default BattleRoyaleSection;
