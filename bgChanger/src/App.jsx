import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-xl'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=> setColor("Green")} className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={()=> setColor("Blue")} className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "Blue"}}>Blue</button>
          <button onClick={()=> setColor("Orange")} className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "Orange"}}>Orange</button>
          <button onClick={()=> setColor("Brown")} className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "Brown"}}>Brown</button>
        </div>
      </div>


    </div>
  )
}

export default App
