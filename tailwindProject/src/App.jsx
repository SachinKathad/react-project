import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <h1 className='bg-green-500 p-4 text-white rounded-xl mb-4'>Tailwind css</h1>
<Card username= 'sachin' />
<Card username='kathad'/>
      
    </>
  )
}

export default App
