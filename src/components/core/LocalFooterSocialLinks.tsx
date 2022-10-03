import {Social as SocialInterface} from '../config/Interfaces';


function LocalFooterSocialLinks({arr}: {arr: Array<SocialInterface>} ) {
  return (
    <div className='min-w-max mt-4 xl:mt-0'>
      <span className="font-bold">Partecipa alla conversazione</span>
      <div className="flex gap-6 py-4">
        {arr.map((item) => {
          return <a target='_blank' rel='noreferrer' href={item.link} className="hover:scale-125 transition ease-in-out delay-100">{item.icon}</a>
        })}
      </div>
    </div>
  )
}

export default LocalFooterSocialLinks