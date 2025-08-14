
import React from 'react'

function Card() {

  const data = [
{image:'https://images.unsplash.com/photo-1662947368791-8630979e964b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D',name:"Daily objects",description:"my initial approach consisted of writing some simple tests, such as checking."},
{image:'https://plus.unsplash.com/premium_photo-1664201890376-b735362539bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D',name:"Amazon Products",description:"my initial approach consisted of writing some simple tests, such as checking."},
{image:'https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D',name:"Amazon Deals",description:"this is amazon deals upto 50% ,enjoy your best time here"}

  ]

  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
      {data.map((elem,index)=>(
<div key={index} className= 'w-52 bg-zinc-100  rounded-md overflow-hidden'>
<div className='h-32 bg-zinc-300'>
  <img src={elem.image}
  />
</div>
<div  className='w-full px-3 py-4 bg-cyan-300'>
  <h2 className='font-semibold'>{elem.name}</h2>
  <p className='text-xs mt-3'>{elem.description}</p>
</div>

</div>

      ))}
      
    </div>
  )
}

export default Card
