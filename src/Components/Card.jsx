
import React from 'react'

function Card({text}) {
  return (
    <div>
      <button  className='py-1 px-3 mt-2 bg-blue-500 text-xs'>{text} </button>
    </div>
  )
}

export default Card
