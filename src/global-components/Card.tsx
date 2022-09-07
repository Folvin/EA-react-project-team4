import React from 'react'

interface Props {
  children: React.ReactNode,
  styleCard?: string
}

function Card({children, styleCard}: Props) {
  return ( <div className={`flex flex-col w-full transition-all duration-500 hover:-translate-y-4 shadow-lg hover:shadow-3xl ${styleCard}`}>
    {children}
  </div> );
}

export default Card;