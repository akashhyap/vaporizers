import React from 'react'

const TitleH2 = ({blok}) => {
  // console.log("TitleH2", blok);
  return (
    <h2 className='text-4xl font-bold'>{blok.text}</h2>
  )
}

export default TitleH2