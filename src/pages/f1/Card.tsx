import { useState } from 'react';

export const containerCard = [
  {
    id: 1,
    date: '26-SET-2022',
    title: 'F1®22-Aggiornamento delle valutazioni dei piloti (Monza)',
    description: 'Le battaglie in griglia si riflettono nelle',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-01.png'
  },
  {
    id: 2,
    date: '12-SET-2022',
    title: 'F1®22-Note sulla patch 1.10',
    description: 'Lo Shanghai international Circuit, una livrea Ferrari speciale, correzioni relative alla risposta del cordolo, alle informazioni di telemetria nelle strategie di gara e altro',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-02.png'
  },
  {
    id: 3,
    date: '12-SET-2022',
    title: 'La Cina fa il suo ritorno in F1® nel nuovo aggiornamento gratuito',
    description: 'Al gioco sono stati aggiunti lo Shanghai International Circuit, una livrea Ferrari speciale e un evento dedicato alla festa della luna',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-03.png'
  },
  {
    id: 4,
    date: '24-AGO-2022',
    title: 'Il cross-play arriva in F1®22-UPDATED',
    description: 'A partire da oggi, potrai correre nello sport motoristico più veloce del mondo sfidando giocatori di qualsiasi piattaforma',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-04.png'
  },
  {
    id: 5,
    date: '24-AGO-2022',
    title: 'Serie 2 del Pass Podio disponibile adesso',
    description: 'Alcune spettacolari livree debuttano nella serie 2 del Pass Podio',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-05.png'
  },
  {
    id: 6,
    date: '22-AGO-2022',
    title: 'F1®22-Note sulla patch 1.09',
    description: 'Cambio automatico, temperature delle gomme e molto altro; scopri cosa è stato corretto nella patch 1.09',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-06.png'
  },
  {
    id: 7,
    date: '22-AGO-2022',
    title: 'F1®22-Aggiornamento delle valutazioni dei piloti',
    description: "Con la conclusione del Gran Premio d'Ungheria, è iniziata la pausa estiva del nostro sport motoristico preferito. Quale momento migliore, dunque, per aggiornare le valutazioni dei piloti di F1®22?",
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-07.png'
  },
  {
    id: 8,
    date: '9-AGO-2022',
    title: 'F1®22-Note sulla patch 1.08',
    description: "Scopri di più sull'ultima patch",
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-08.png'
  },
  {
    id: 9,
    date: '2-AGO-2022',
    title: 'F1®22-Note sulla patch 1.07',
    description: "Scopri di più sull'ultima patch",
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-09.png'
  },



];

interface Props {
  id: number;
  date: string;
  title: string;
  logo: string;
  avatar: string;
  description: string;
}
export const LoadMoreContent = ({ container }: { container: Array<Props> }) => {

  const cardPerRow = 3;
  const [next, setNext] = useState(cardPerRow);

  const handleMoreContent = () => {
    setNext(next + cardPerRow);
  };

  return (
    <>
      <h1 className="text-center font-f1-bold 2xl:text-5xl py-4 2xl:pt-28 2xl:pb-8">ULTIME NOTIZIE</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">

          {container?.slice(0, next)?.map((card, index) => {
            return (
              <div key={index} className="">

                <div className="p-2 px-8 ">
                  <div className="container card md:max-w-[350px] transition-all duration-500 hover:-translate-y-3 shadow-lg hover:shadow-3xl ">
                    <div className="md:min-h-[480px]  text-xl bg-zinc-800 text-white pb-4 font-f1-bold flex flex-col items-center text-center gap-2 ">
                      <div className='w-[100%]'>

                        <img alt='' src={card.avatar} className='hidden md:block' />
                      </div>
                      <div className="text-sm">
                        <h1 className="text-orange-400">{card.logo}</h1>
                        <h1>{card.date}</h1>
                      </div>
                      <div className='px-4'>
                        <h1>{card.title}</h1>
                        <h1 className='font-f1-regular text-sm pt-4 hidden md:block'>{card.description}</h1>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
          
        </div>
        
      </div>
      {next < container?.length && (
            <div className='flex items-center justify-center'>
              <button className="w-[100%] md:w-[80%] lg:w-[100%] xl:w-[75%] 2xl:w-[65%] mt-4 px-8 pb-4" onClick={handleMoreContent}>
                <div className='border border-black py-8'>
                  LOAD MORE
                </div>
              </button>
            </div>
          )}
    </>
  );
};