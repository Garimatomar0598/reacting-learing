import Card from './Components/Card';
import React from 'react';

function App() {

const data =[
{name:"Garima", profession:"Coder",image:"https://images.unsplash.com/photo-1755529905229-e0536cf889d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"},
{name:"Dev", profession:"officer",image:"https://plus.unsplash.com/premium_photo-1755617893484-e34cf4aaba3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
{name:"Nishi", profession:"Teacher", image:"https://images.unsplash.com/photo-1699474072277-aeccb6e17263?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
{name:"Rahul",profession:"Enginner",image:"https://images.unsplash.com/photo-1755542366683-282c366982a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"}
  ];

  return (
    <div>
     <Card />
    </div>
  )
}

export default App
