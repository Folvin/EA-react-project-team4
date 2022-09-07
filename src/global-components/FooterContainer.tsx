import React from 'react';

interface Props {
    children: React.ReactNode;
}

function FooterContainer({children}: Props) {
    return (
        <div className="px-[8%] bg-gray-100">
            <div className="grid lg:grid-cols-10 lg:grid-rows-auto lg:mx-[8.6%]  gap-y-4">
                {children}
            </div>
        </div>
    )
}

export default FooterContainer


