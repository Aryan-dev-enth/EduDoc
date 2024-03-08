import React from 'react'
import Card from './Card'

const CardContainer = () => {
  return (
    <div className='w-full h-full flex flex-wrap px-8 sm:px-24 '>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardContainer