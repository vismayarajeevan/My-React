import { useState } from 'react'

import './App.css'

function App() {
 
  // 1.create state for counter
  const [state, setState]= useState(0)

  // 2.create function to increment counter
 const increment=()=>{
   setState(state+1)
  }
 
  // 3.function to decrement counter
  const decrement =()=>{
    setState(state-1)
  }

  return (
    <>
    <div className='text-center'>  
      <h1 className='text-white'>Counter</h1>
      <h1 className='text-white'>{state}</h1>
      <button onClick={increment} className='btn bg-info text-white mt-5'>+</button>
      <button onClick={decrement} className='btn bg-info text-white ms-3 mt-5 '>-</button>
      </div>
    </>
  )
}

export default App
