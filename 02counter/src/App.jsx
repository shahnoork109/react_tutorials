import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () =>{
    // counter = counter + 1;
    // console.log("clicked", counter);

    
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // the all above will just increase one value , not 4 value , bcoz react send these in the form of bundle , for more details run above command and below command

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)


    // if(counter < 20){
    //   setCounter(counter + 1);
    // }
    
  }
  const removeValue = () =>{
    // setCounter(counter - 1)

    if(counter > 0){
      setCounter(counter - 1);
    }
    
  }

  return (
    <>
      <h1>coffee aur react</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
    </>
  )
}

export default App
