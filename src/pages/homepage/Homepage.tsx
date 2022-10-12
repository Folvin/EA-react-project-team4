import config from "../../components/config/HomepageConfig";
import Button from "../../components/shared/Button";
import CardGrid from "../../components/shared/CardGrid";
import NavigationBar from "../../components/shared/NavigationBar";
import Section from "../../components/shared/Section";
import BackgroundImg from "./components/BackgroundImg";
import Banner from "./components/Banner";
import GameCell from "./components/GameCell";
import Image from "./components/Image";
import {Tab} from "@headlessui/react";
import Title from "./components/Title";
import SingleTab from "./components/SingleTab";
import News from "./components/News";
import NewsText from "./components/NewsText";
import LocalFooterEa from "../../components/shared/PreFooter";
import HomepageConfig from "../../components/config/LocalFooterHome";

function Homepage() {
  return (
    <div className="font-roboto-normal text-base xl:text-xl 2xl:text-2xl bg-[#F3F3F3]">
      <NavigationBar
        navColor={config.navColor}
        textColor={config.textColor}
        burgerColor={config.burgerColor}
        font={config.font}
        logo={config.logo}
        mainPage={config.mainPage}
        hoverColor={config.hoverColor}
        mobileActiveColor={config.mobileActiveColor}
        mobileBorderColor={config.mobileBorderColor}
        buyButtonConfig={config.buyButtonConfig}
        buyButtonColor={config.buyButtonColor}
        navLinks={config.navLinks}
        mobileSidebarHeaderColor={config.mobileSidebarHeaderColor}
        free={config.free}
      />

      {/* header banner */}
      <header>
        <Banner url="header/bannerHeader.jpg">
          <Section className="py-8 flex flex-col gap-4">
            <div>
              <Image url="header/bannerLogo.svg" />
            </div>
            <div className="text-3xl sm:text-3xl lg:text-5xl 2xl:text-7xl font-roboto-bold">
              <p>Parti dal basso, raggiungi la vetta.</p>
            </div>
            <div>
              <Button url="/">Scopri di più</Button>
            </div>
          </Section>
        </Banner>
        <BackgroundImg classNameImg="object-cover h-28 sm:h-16" url="header/bannerBottom.jpg">
          <Section className="flex h-full justify-between items-center flex-col sm:flex-row py-2 md:text-lg lg:text-xl">
            <p className="font-roboto-bold sm:basis-0 sm:grow-[3]">Guarda 7 minuti di gioco di WILD HEARTS™!</p>
            <div className="w-full sm:basis-0 sm:grow-[5] sm:flex sm:justify-end">
              <Button className="bg-transparent border-black" url="/">
                Scopri di più
              </Button>
            </div>
          </Section>
        </BackgroundImg>
      </header>

      {/* giochi in evidenza */}
      <Section className="flex flex-col pt-4">
        <Title>Giochi in evidenza</Title>
        <CardGrid columns="grid-cols-automd md:grid-cols-3 2xl:grid-cols-6 transition-all">
          <GameCell link="/F1" backgroundImg="F1.png" logoImg="F1-logo.png" />
          <GameCell link="/lost-in-random" backgroundImg="lost-in-random.jpg" logoImg="lost-in-random-logo.png" />
          <GameCell link="/apex" backgroundImg="apex.jpg" logoImg="apex-logo.png" />
          <GameCell link="/" backgroundImg="battlefield.jpg" logoImg="battlefield-logo.png" />
          <GameCell link="/" backgroundImg="fifa23.jpg" logoImg="fifa23-logo.png" />
          <GameCell link="/" backgroundImg="wild-hearts.jpg" logoImg="wild-hearts-logo.png" />
        </CardGrid>
        <Button className="bg-transparent border-black mt-4 mx-auto" url="/">
          Ultimi giochi
        </Button>
      </Section>

      {/* ultime novità */}
      <Section className="py-6">
        <Title>Ultime novità</Title>
        <Tab.Group>
          <Tab.List className={"grid grid-cols-2 bg-gray-500 sm:grid-cols-4 gap-[1px] lg:flex lg:h-10 max-w-[1024px]"}>
            <SingleTab>Notizie EA</SingleTab>
            <SingleTab>EA Play</SingleTab>
            <SingleTab>FIFA</SingleTab>
            <SingleTab>F1</SingleTab>
            <SingleTab>Apex Legends</SingleTab>
            <SingleTab>The Sims™ 4</SingleTab>
            <SingleTab>Battlefield</SingleTab>
            <SingleTab>Inside EA</SingleTab>
          </Tab.List>
          <hr className="mt-2 border-1 border-gray-500" />
          <Tab.Panels>
            {/* pannello 1 */}
            <Tab.Panel>
              <CardGrid columns="grid-cols-autolg lg:grid-cols-3 4xl:grid-cols-6 mt-4">
                <News cardImg="placeholder.png" date="6-ott-2022" url="/">
                  <NewsText title="Un aggiornamento per i nostri giocatori Mac sull'EA app per Windows">
                    Forse avrai letto qualche notizia sulla nuova EA app per Windows, che presto diventerà il principale punto di
                    riferimento per i giochi PC di EA, andando a sostituire Origin. Sappiamo che ti interessa sapere cosa questo compor…
                  </NewsText>
                </News>

                <News cardImg="ea-app.jpg" date="6-ott-2022" url="/">
                  <NewsText title="La nuovissima EA app per Windows: la nuova piattaforma di EA ottimizzata pe…">
                    Siamo lieti di annunciare che l'EA app ha ufficialmente abbandonato la fase open beta e presto sostituirà Origin in
                    qualità di piattaforma primaria per PC.
                  </NewsText>
                </News>

                <News cardImg="impact-report.png" date="4-ott-2022" url="/">
                  <NewsText title="Condividiamo il nostro rapporto sull'impatto del 2022">
                    Rapporto annuale sull'impatto esercitato da EA nel 2022, nel quale vengono evidenziati i nostri impegni e i nostri
                    progressi in materia di costruzione di team in cui regni un clima di diversità e serenità, impatto sociale, gi…
                  </NewsText>
                </News>

                <News cardImg="ironman.jpg" date="20-set-2022" url="/">
                  <NewsText title="Marvel Entertainment e Motive Studio danno vita a un nuovo Iron Man">
                    Marvel Entertainment e Motive Studio collaborano per un nuovo videogioco di Iron Man, già in sviluppo.
                  </NewsText>
                </News>

                <News cardImg="the-sims.png" date="14-set-2022" url="/">
                  <NewsText title="Giocate a The Sims 4 gratis a partire dal 18 ottobre">
                    Ulteriori aggiornamenti a seguire durante uno streaming speciale: "Behind The Sims Summit"
                  </NewsText>
                </News>

                <News cardImg="placeholder.png" date="13-set-2022" url="/">
                  <NewsText title="Un approfondimento su EA anticheat per PC">
                    EA anticheat protegge l'integrità del gioco su PC rilevando e prevenendo i trucchi. Dai un'occhiata alle FAQ per saperne
                    di più!
                  </NewsText>
                </News>
              </CardGrid>
            </Tab.Panel>

            {/* pannello 2 */}
            <Tab.Panel>
              <CardGrid columns="grid-cols-autolg lg:grid-cols-3 4xl:grid-cols-6 mt-4">
                <News cardImg="placeholder-feature.jpg" date="14-mag-2021" url="/">
                  <NewsText title="Gioca a Mass Effect™ Legendary Edition con EA Play* Pro">
                    Vivi la saga cinematografica ora rimasterizzata e ottimizzata per il 4K Ultra HD
                  </NewsText>
                </News>

                <News cardImg="fifa21.png" date="3-mag-2021" author="FIFA" url="/">
                  <NewsText title="Ottieni di più da FIFA 21 con EA Play - Sito ufficiale EA SPORTS">
                    FIFA 21 è ora disponibile in The Play List con EA Play.
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="1-apr-2021" url="/">
                  <NewsText title="In evidenza su EA Play - Aprile 2021">
                    Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play.
                  </NewsText>
                </News>

                <News cardImg="ea-play.jpg" date="18-mar-2021" url="/">
                  <NewsText title="EA Play è ora disponibile su Xbox Game Pass per PC tramite EA app">
                    EA app, la nostra piattaforma PC di nuova generazione, è in fase di open beta. Stiamo unendo le nostre forze con Xbox
                    per offrire più giochi agli utenti PC.
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="1-mar-2021" url="/">
                  <NewsText title="In evidenza su EA Play - Marzo 2021">
                    Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play o EA Play Pro.
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="25-feb-2021" url="/">
                  <NewsText title="EA Play - Prossimamente in The Play List - Primavera 2021">
                    Scopri tutto sui nuovi giochi in arrivo su EA Play o EA Play Pro.
                  </NewsText>
                </News>
              </CardGrid>
            </Tab.Panel>

            {/* pannello 3 */}
            <Tab.Panel>
              <CardGrid columns="grid-cols-autolg lg:grid-cols-3 4xl:grid-cols-6 mt-4">
                <News cardImg="ironman.jpg" date="20-set-2022" url="/">
                  <NewsText title="Marvel Entertainment e Motive Studio danno vita a un nuovo Iron Man">
                    Marvel Entertainment e Motive Studio collaborano per un nuovo videogioco di Iron Man, già in sviluppo.
                  </NewsText>
                </News>

                <News cardImg="ea-app.jpg" date="6-ott-2022" url="/">
                  <NewsText title="La nuovissima EA app per Windows: la nuova piattaforma di EA ottimizzata pe…">
                    Siamo lieti di annunciare che l'EA app ha ufficialmente abbandonato la fase open beta e presto sostituirà Origin in
                    qualità di piattaforma primaria per PC.
                  </NewsText>
                </News>

                <News cardImg="the-sims.png" date="14-set-2022" url="/">
                  <NewsText title="Giocate a The Sims 4 gratis a partire dal 18 ottobre">
                    Ulteriori aggiornamenti a seguire durante uno streaming speciale: "Behind The Sims Summit"
                  </NewsText>
                </News>

                <News cardImg="placeholder.png" date="6-ott-2022" url="/">
                  <NewsText title="Un aggiornamento per i nostri giocatori Mac sull'EA app per Windows">
                    Forse avrai letto qualche notizia sulla nuova EA app per Windows, che presto diventerà il principale punto di
                    riferimento per i giochi PC di EA, andando a sostituire Origin. Sappiamo che ti interessa sapere cosa questo compor…
                  </NewsText>
                </News>

                <News cardImg="placeholder.png" date="13-set-2022" url="/">
                  <NewsText title="Un approfondimento su EA anticheat per PC">
                    EA anticheat protegge l'integrità del gioco su PC rilevando e prevenendo i trucchi. Dai un'occhiata alle FAQ per saperne
                    di più!
                  </NewsText>
                </News>

                <News cardImg="impact-report.png" date="4-ott-2022" url="/">
                  <NewsText title="Condividiamo il nostro rapporto sull'impatto del 2022">
                    Rapporto annuale sull'impatto esercitato da EA nel 2022, nel quale vengono evidenziati i nostri impegni e i nostri
                    progressi in materia di costruzione di team in cui regni un clima di diversità e serenità, impatto sociale, gi…
                  </NewsText>
                </News>
              </CardGrid>
            </Tab.Panel>

            {/* pannello 4 */}
            <Tab.Panel>
              <CardGrid columns="grid-cols-autolg lg:grid-cols-3 4xl:grid-cols-6 mt-4">
                <News cardImg="fifa21.png" date="3-mag-2021" author="FIFA" url="/">
                  <NewsText title="Ottieni di più da FIFA 21 con EA Play - Sito ufficiale EA SPORTS">
                    FIFA 21 è ora disponibile in The Play List con EA Play.
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="1-apr-2021" url="/">
                  <NewsText title="In evidenza su EA Play - Aprile 2021">
                    Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play.
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="14-mag-2021" url="/">
                  <NewsText title="Gioca a Mass Effect™ Legendary Edition con EA Play* Pro">
                    Vivi la saga cinematografica ora rimasterizzata e ottimizzata per il 4K Ultra HD
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="1-mar-2021" url="/">
                  <NewsText title="In evidenza su EA Play - Marzo 2021">
                    Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play o EA Play Pro.
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="25-feb-2021" url="/">
                  <NewsText title="EA Play - Prossimamente in The Play List - Primavera 2021">
                    Scopri tutto sui nuovi giochi in arrivo su EA Play o EA Play Pro.
                  </NewsText>
                </News>

                <News cardImg="ea-play.jpg" date="18-mar-2021" url="/">
                  <NewsText title="EA Play è ora disponibile su Xbox Game Pass per PC tramite EA app">
                    EA app, la nostra piattaforma PC di nuova generazione, è in fase di open beta. Stiamo unendo le nostre forze con Xbox
                    per offrire più giochi agli utenti PC.
                  </NewsText>
                </News>
              </CardGrid>
            </Tab.Panel>

            {/* pannello 5 */}
            <Tab.Panel>
              <CardGrid columns="grid-cols-autolg lg:grid-cols-3 4xl:grid-cols-6 mt-4">
                <News cardImg="the-sims.png" date="14-set-2022" url="/">
                  <NewsText title="Giocate a The Sims 4 gratis a partire dal 18 ottobre">
                    Ulteriori aggiornamenti a seguire durante uno streaming speciale: "Behind The Sims Summit"
                  </NewsText>
                </News>

                <News cardImg="ea-app.jpg" date="6-ott-2022" url="/">
                  <NewsText title="La nuovissima EA app per Windows: la nuova piattaforma di EA ottimizzata pe…">
                    Siamo lieti di annunciare che l'EA app ha ufficialmente abbandonato la fase open beta e presto sostituirà Origin in
                    qualità di piattaforma primaria per PC.
                  </NewsText>
                </News>

                <News cardImg="impact-report.png" date="4-ott-2022" url="/">
                  <NewsText title="Condividiamo il nostro rapporto sull'impatto del 2022">
                    Rapporto annuale sull'impatto esercitato da EA nel 2022, nel quale vengono evidenziati i nostri impegni e i nostri
                    progressi in materia di costruzione di team in cui regni un clima di diversità e serenità, impatto sociale, gi…
                  </NewsText>
                </News>

                <News cardImg="ironman.jpg" date="20-set-2022" url="/">
                  <NewsText title="Marvel Entertainment e Motive Studio danno vita a un nuovo Iron Man">
                    Marvel Entertainment e Motive Studio collaborano per un nuovo videogioco di Iron Man, già in sviluppo.
                  </NewsText>
                </News>

                <News cardImg="placeholder.png" date="6-ott-2022" url="/">
                  <NewsText title="Un aggiornamento per i nostri giocatori Mac sull'EA app per Windows">
                    Forse avrai letto qualche notizia sulla nuova EA app per Windows, che presto diventerà il principale punto di
                    riferimento per i giochi PC di EA, andando a sostituire Origin. Sappiamo che ti interessa sapere cosa questo compor…
                  </NewsText>
                </News>

                <News cardImg="placeholder.png" date="13-set-2022" url="/">
                  <NewsText title="Un approfondimento su EA anticheat per PC">
                    EA anticheat protegge l'integrità del gioco su PC rilevando e prevenendo i trucchi. Dai un'occhiata alle FAQ per saperne
                    di più!
                  </NewsText>
                </News>
              </CardGrid>
            </Tab.Panel>

            {/* pannello 6 */}
            <Tab.Panel>
              <CardGrid columns="grid-cols-autolg lg:grid-cols-3 4xl:grid-cols-6 mt-4">
                <News cardImg="ea-play.jpg" date="18-mar-2021" url="/">
                  <NewsText title="EA Play è ora disponibile su Xbox Game Pass per PC tramite EA app">
                    EA app, la nostra piattaforma PC di nuova generazione, è in fase di open beta. Stiamo unendo le nostre forze con Xbox
                    per offrire più giochi agli utenti PC.
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="1-apr-2021" url="/">
                  <NewsText title="In evidenza su EA Play - Aprile 2021">
                    Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play.
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="14-mag-2021" url="/">
                  <NewsText title="Gioca a Mass Effect™ Legendary Edition con EA Play* Pro">
                    Vivi la saga cinematografica ora rimasterizzata e ottimizzata per il 4K Ultra HD
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="1-mar-2021" url="/">
                  <NewsText title="In evidenza su EA Play - Marzo 2021">
                    Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play o EA Play Pro.
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="25-feb-2021" url="/">
                  <NewsText title="EA Play - Prossimamente in The Play List - Primavera 2021">
                    Scopri tutto sui nuovi giochi in arrivo su EA Play o EA Play Pro.
                  </NewsText>
                </News>

                <News cardImg="fifa21.png" date="3-mag-2021" author="FIFA" url="/">
                  <NewsText title="Ottieni di più da FIFA 21 con EA Play - Sito ufficiale EA SPORTS">
                    FIFA 21 è ora disponibile in The Play List con EA Play.
                  </NewsText>
                </News>
              </CardGrid>
            </Tab.Panel>

            {/* pannello 7 */}
            <Tab.Panel>
              <CardGrid columns="grid-cols-autolg lg:grid-cols-3 4xl:grid-cols-6 mt-4">
                <News cardImg="placeholder.png" date="6-ott-2022" url="/">
                  <NewsText title="Un aggiornamento per i nostri giocatori Mac sull'EA app per Windows">
                    Forse avrai letto qualche notizia sulla nuova EA app per Windows, che presto diventerà il principale punto di
                    riferimento per i giochi PC di EA, andando a sostituire Origin. Sappiamo che ti interessa sapere cosa questo compor…
                  </NewsText>
                </News>

                <News cardImg="ironman.jpg" date="20-set-2022" url="/">
                  <NewsText title="Marvel Entertainment e Motive Studio danno vita a un nuovo Iron Man">
                    Marvel Entertainment e Motive Studio collaborano per un nuovo videogioco di Iron Man, già in sviluppo.
                  </NewsText>
                </News>

                <News cardImg="impact-report.png" date="4-ott-2022" url="/">
                  <NewsText title="Condividiamo il nostro rapporto sull'impatto del 2022">
                    Rapporto annuale sull'impatto esercitato da EA nel 2022, nel quale vengono evidenziati i nostri impegni e i nostri
                    progressi in materia di costruzione di team in cui regni un clima di diversità e serenità, impatto sociale, gi…
                  </NewsText>
                </News>

                <News cardImg="the-sims.png" date="14-set-2022" url="/">
                  <NewsText title="Giocate a The Sims 4 gratis a partire dal 18 ottobre">
                    Ulteriori aggiornamenti a seguire durante uno streaming speciale: "Behind The Sims Summit"
                  </NewsText>
                </News>

                <News cardImg="placeholder.png" date="13-set-2022" url="/">
                  <NewsText title="Un approfondimento su EA anticheat per PC">
                    EA anticheat protegge l'integrità del gioco su PC rilevando e prevenendo i trucchi. Dai un'occhiata alle FAQ per saperne
                    di più!
                  </NewsText>
                </News>

                <News cardImg="ea-app.jpg" date="6-ott-2022" url="/">
                  <NewsText title="La nuovissima EA app per Windows: la nuova piattaforma di EA ottimizzata pe…">
                    Siamo lieti di annunciare che l'EA app ha ufficialmente abbandonato la fase open beta e presto sostituirà Origin in
                    qualità di piattaforma primaria per PC.
                  </NewsText>
                </News>
              </CardGrid>
            </Tab.Panel>

            {/* pannello 8 */}
            <Tab.Panel>
              <CardGrid columns="grid-cols-autolg lg:grid-cols-3 4xl:grid-cols-6 mt-4">
                <News cardImg="placeholder-feature.jpg" date="25-feb-2021" url="/">
                  <NewsText title="EA Play - Prossimamente in The Play List - Primavera 2021">
                    Scopri tutto sui nuovi giochi in arrivo su EA Play o EA Play Pro.
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="1-apr-2021" url="/">
                  <NewsText title="In evidenza su EA Play - Aprile 2021">
                    Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play.
                  </NewsText>
                </News>

                <News cardImg="ea-play.jpg" date="18-mar-2021" url="/">
                  <NewsText title="EA Play è ora disponibile su Xbox Game Pass per PC tramite EA app">
                    EA app, la nostra piattaforma PC di nuova generazione, è in fase di open beta. Stiamo unendo le nostre forze con Xbox
                    per offrire più giochi agli utenti PC.
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="14-mag-2021" url="/">
                  <NewsText title="Gioca a Mass Effect™ Legendary Edition con EA Play* Pro">
                    Vivi la saga cinematografica ora rimasterizzata e ottimizzata per il 4K Ultra HD
                  </NewsText>
                </News>

                <News cardImg="placeholder-feature.jpg" date="1-mar-2021" url="/">
                  <NewsText title="In evidenza su EA Play - Marzo 2021">
                    Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play o EA Play Pro.
                  </NewsText>
                </News>

                <News cardImg="fifa21.png" date="3-mag-2021" author="FIFA" url="/">
                  <NewsText title="Ottieni di più da FIFA 21 con EA Play - Sito ufficiale EA SPORTS">
                    FIFA 21 è ora disponibile in The Play List con EA Play.
                  </NewsText>
                </News>
              </CardGrid>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <Button className="bg-transparent border-black mt-4 mx-auto" url="/">
          Più dettagli
        </Button>
      </Section>

      {/* EA play */}
      <div>
        <BackgroundImg classNameImg="object-cover h-[400px]" url="ea-play/ea-play-banner.jpg">
          <Section className="h-full">
            <div className="text-white w-full h-full md:w-1/2 flex flex-col justify-center">
              <Image className="w-1/2 max-w-[160px] h-fit" url="ea-play/ea-play-logo.svg" />
              <p className="tracking-tight">
                Non limitarti al gioco. Gioca al massimo. Sblocca ricompense esclusive, contenuti per i soli membri e una libreria dei
                migliori titoli.
              </p>
              <Button className="mt-4" url="/">
                Iscriviti subito
              </Button>
            </div>
          </Section>
        </BackgroundImg>
        <Section className="bg-[#6FB0D6] flex flex-col sm:flex-row gap-2 justify-between sm:items-center py-2">
          <p className="font-roboto-bold text-[1.2em]">Genitori: il controllo dei videogiochi è nelle vostre mani.</p>
          <Button className="bg-transparent border-black" url="/">Scopri di più</Button>
        </Section>
      </div>

      {/* pre footer */}
      <LocalFooterEa config={HomepageConfig}/>
    </div>

  );
}

export default Homepage;
