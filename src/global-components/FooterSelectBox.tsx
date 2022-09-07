import React from 'react';


//management of the 2 select boxes for language selection and for viewing prices

function FooterSelectBox() {

    return (
        <div className="grid gap-x-4 gap-y-4 md:flex lg:col-span-4 lg:pl-0 xl:col-span-4 xl:col-start-7 2xl:col-start-8 2xl:gap-x-5">
            <div className="md:w-1/2 border-2 border-gray-400 px-2 h-16 2xl:max-w-[190px] ">
                <span className=''>Prezzi Regionali<div>Italia</div></span>
            </div>
            <div className="md:w-1/2 border-2 border-gray-400 px-2 h-16 2xl:max-w-[190px]">
                <span>Lingua<div>Italia</div></span>
            </div>
        </div>
    )
}

export default FooterSelectBox
