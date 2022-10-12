import { useState } from 'react';



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
            <div className='text-gray-400 border border-black py-4 font-f1-bold hover:border-gray-300 hover:text-transparent flex flex-col items-center'>
              <div className='border border-gray-300 rounded-full w-[50px] h-[50px] flex items-center justify-center '>+</div>
              <span className='text-xl'>LOAD MORE</span>
            </div>
          </button>
        </div>
      )}
    </>
  );
};