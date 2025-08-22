
import React, { useState } from 'react'


function App() {
 const [banned,setbanned] = useState(false);



  return (
    <>
  <div className='p-4'>
  <h1>{banned.toString()}</h1>
  <button onClick={()=>setbanned(!banned)} className='px-2 py-2 text-xl bg-blue-500 text-white '>change now</button>
  </div>
    </>
  )
}

export default App;
