import { useState, useCallback, useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed ,setCharAllowed] = useState(false);
  const [Password,setPassword] =useState("")

  //callback function
  const PasswordGenerator = useCallback(()=>{
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str+= "0123456789"
    }
    if(charAllowed){
      str+=" !@#$%^&*()_+"
    }

    for (let i =1;i<=length; i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
     }

     setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])
    //usecallback : useCallback is a React Hook that lets you cache a function definition between re-renders.
     //const cachedFn = useCallback(fn, dependencies) //depedencies== if something change then it re render
  
  
//UseEffect hook:The useEffect Hook allows you to perform side effects in your components.
//Some examples of side effects are: fetching data, directly updating the DOM, and timers.
//useEffect accepts two arguments. The second argument is optional.
//useEffect(<function>, <dependency>)
//memonization


useEffect(()=>{
  PasswordGenerator()
},[length,numberAllowed,charAllowed,PasswordGenerator])
  
  
  
     return (
    <>

      <h1 className='text-4xl text-center text-white '>PasswordGenerator</h1>
    <div>
      <div>
        <input 
        type="text"
        value = {Password}
        placeholder='password'
        readOnly
        />
        <button>copy </button>
        
      </div>
      <div>
        <div>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div>
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
             setNumberAllowed((prev) => !prev);
          }}
         />
         <label htmlFor='numberInput'>Numbers</label>

        </div>
        <div>
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={()=>{
             setCharAllowed((prev) => !prev);
          }}
         />
         <label htmlFor='characterInput'>Characters</label>

        </div>
      </div>
      </div>  
    
    </>
  )
}

export default App
