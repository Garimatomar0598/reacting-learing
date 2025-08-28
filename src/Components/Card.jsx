
import React from 'react'

function Card({image,name,profession}){
  return (
    <div className='w-52 bg-white p-3 overflow-hidden'>
      <div className='w-full h-32 bg-sky-200'>
        <img className='w-full h-full object-cover' src={image} alt=""/>
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-extrabold'>{name}</h3>
        <h4 className='text-xs'>{profession}</h4>
        <button onClick={()=>alert("adding as a friend")} className='px-3 py-1 text-xs text-white bg-blue-500 mt-4'>Add Friend</button>
      </div>


    </div>


  )
}

export default Card
