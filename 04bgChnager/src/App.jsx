import { useState } from 'react'


function App() {
  const[color , setColor]= useState("#3b444b")
  return (
    <>
      <div className="w-full h-screen duration-200"
       style = {{backgroundColor: color}}>
      </div>

      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-20 shadow-lg bg-white py-2 px-5 rounded-xl' style={{backgroundColor: '#232b2b'}}>
          <button onClick={()=>{setColor("red")}} className='py-2  px-2 rounded-full w-20' style={{color: 'red'}}>Red</button>
          <button onClick={()=>{setColor("yellow")}} className='py-2  px-2 rounded-full w-20' style={{color: 'yellow'}}>Yellow</button>
          <button onClick={()=>{setColor("green")}} className='py-2  px-2 rounded-full w-20' style={{color: 'green'}}>Green</button>
          <button onClick={()=>{setColor("blue")}} className='py-2  px-2 rounded-full w-20' style={{color: 'blue'}}>Blue</button>
          <button onClick={()=>{setColor("violet")}} className='py-2  px-2 rounded-full w-20' style={{color: 'violet'}}>Violet</button>
        </div>
      </div>
    </>
  )
}

export default App
