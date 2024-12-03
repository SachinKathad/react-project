import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
 
const addValue = ()=>{
  console.log(counter, Math.random());
  if(counter>19){
    setCounter(20)
  }else
setCounter(counter+1)
  
  
  
}
const removeValue = ()=>{
  console.log(counter, Math.random());
  if(counter<1){
    setCounter(0)
  
}else
setCounter(counter-1)

}
  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
