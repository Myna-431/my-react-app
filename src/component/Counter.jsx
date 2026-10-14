
import {useEffect,useState} from "react";
function Counter() {
    const[count,setcount]=useState(0)
    //without dependencies
    /*useEffect(()=>{
        console.log("useeffect rendered")
    },[])
    //with dependencies
    useEffect(()=>{
        console.log("counter button is pressed"),[count]
    })
    //empty dependencies
    useEffect(()=>{
        console.log("every time")
    })*/
    function timeout(){
      setTimeout(()=>{
        console.log("test")
      },3000)
    }
    function interval(){
      setInterval(()=>{
        console.log("interval test")
      },500)
    }

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
      <button onClick={()=>setcount(0)}>Reset</button>
      <button onClick={timeout}>time</button>
      <button onClick={interval}>Interval</button>
      </div>
  
  )
}

export default Counter
