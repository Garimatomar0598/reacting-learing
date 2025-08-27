import React, { useState } from 'react'


function App() {
 const [val,setval] = useState([1,2,3,4,5,6])
  return (
    <div className='p-8'>     
{val.map(item=><h1>{item}</h1>)}
<button  onClick={()=>setval(()=>{
  return val.filter(( item,index)=>index !=val.length-1)
})}


 className='py-2 px-5 bg-blue-600 text-xs-text-white rounded-full'>Click me</button>
 </div>
  )
} 

export default App
