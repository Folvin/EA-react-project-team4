import React from 'react';


//First item list of Footer about info, accesibility, registration and help
export function FooterListUp() { 

    const listUp: string[] = ['Libreria dei giochi', 'Registrati', 'Riscatta codice', 'Origin', 'Informazioni', 'Accessibilità', 'Aiuto']
    
    return (
        <div className="leading-loose md:leading-10 lg:mr-2 lg:col-span-5">
            <div className='xl:pr-[25%]'>
                {listUp.map((item, index) => {
                return <p className="pr-10 float-left" key={index}><a href='#!'>{item}</a></p>
                })}
            </div>
        </div>
    )
}



//Second item list of Footer about privacy, cookie and copyright
export function FooterListDown() {

    const listDown: string[] = ['Note legali e privacy', `Accordo con l'utente`, `Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)`, 'Aggiornamenti sui servizi online', 'Terimini di servizio di YouTube', 'Norme sulla privacy di Google', 'Cookie Preferenze', `© 2022 Electronic Arts Inc.`]

    return (
        <div className=" lg:col-start-2 lg:col-span-7 xl:col-span-5 xl:col-start-2 2xl:col-span-4 2xl:col-start-2">
            {listDown.map((item, index) => {
            return <p className="float-left pr-8 text-sm  last:pt-2 last:block last:w-[100%] leading-loose"key={index}><a href='#!'>{item}</a></p>
            })}
        </div>
    )
}



//TrustE logo management
export function LogoTrust() {

    return (
        <div className="lg:col-start-9 lg:col-span-2 lg:self-end">
            <div className="flex lg:justify-end">
               <a href='#!'><img className="max-w-[176px]" src="assets/global/truste-politicy-logo.png" alt='logo truste politicy' /></a>
            </div>
        </div>
    )
}



//Ea-purple logo management
export function LogoEa() {

    return (
        <div className="lg:col-span-1 ">
            <a href='#!'><img className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16" src="assets/global/ea-ring-purple-logo.png" alt='logo ea-purple' /></a>
        </div>
    )
}


