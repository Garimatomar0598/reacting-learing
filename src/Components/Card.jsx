
import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200'>
      <div className= 'w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -transalte-y-[50%] rounded-md overflow-hidden'>
<div className='h-32 bg-zinc-300'>
  <img src="https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D"alt="Amazon Image"/>
</div>
<div  className='w-full px-3 py-4 bg-cyan-300'>
  <h2 className='font-semibold'>Amazon Basic</h2>
  <p className='text-xs mt-3'>My initial approach consisted of writing some simple tests, such as checking.</p>
</div>


      </div>
      
    </div>
  )
}

export default Card
