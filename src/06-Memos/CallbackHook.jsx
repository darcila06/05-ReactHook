import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {
  
  const [counter, setCounter] = useState(10);

  const incrementar = useCallback(
    (incremento = 1) => {
    setCounter( (value) => value + incremento)
    
    },
    [],
  )
  

//   const increment = () => {
//     setCounter(counter+1)
//   }

    return (
    <div>

        <h1> useCallBack Hook:  {counter }</h1>
        <hr />

        <ShowIncrement increment={incrementar}></ShowIncrement>
        
    </div>
  )
}
