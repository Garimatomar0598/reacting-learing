
import React from 'react'

function Card() {

  const data = [
{image:'https://images.unsplash.com/photo-1522780550166-284a0288c8df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww',name:"Daily objects",description:"my initial approach consisted of writing some simple tests, such as checking."},
{image:'https://plus.unsplash.com/premium_photo-1664201890376-b735362539bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D',name:"Amaon Products",description:"my initial approach consisted of writing some simple tests, such as checking."},
{image:'',name:"Amzon Deals",description:"this is amaon deals upto 50% ,enjoy your best time here"}

  ]

  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
      <div className= 'w-52 bg-zinc-100  rounded-md overflow-hidden'>
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
