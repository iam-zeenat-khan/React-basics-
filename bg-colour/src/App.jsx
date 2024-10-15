/*import { useState } from 'react'

import './App.css'

function App() {
   const [color,setColor]= useState("#ff0000");
   console.log (color);
  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
             <button 
             onClick={() => setColor("red")}
             className='outline-2 px-4 '
             style={{backgroundColor : "red"}}
             >
              RED
             </button>
             <button 
             onClick={() => setColor("khaki")}
             className='outline-2 px-4 '
             style={{backgroundColor : "khaki"}}
             >
              KHAKI
             </button>
              <button className='outline-2 px-4 '
             style={{backgroundColor : "skyblue"}}
             >
               SKYBLUE
             </button>
              <button className='outline-2 px-4 '
             style={{backgroundColor : "beige"}}
             >
               BEIGE
             </button>
              <button className='outline-2 px-4 '
             style={{backgroundColor : "lavender"}}
             >
               LAVENDER
             </button>
              <button className='outline-2 px-4 '
             style={{backgroundColor : "orchid"}}
             >
               ORCHID
             </button>
             

          </div>
        </div>
   

    </div>
      
    
  )
}

export default App*/
import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App