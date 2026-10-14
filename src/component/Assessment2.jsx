import {useState} from "react"
import './Assessment2.css'
const Assessment2 = () => { 
  const[theme,settheme]=useState(false)
  const[birth,setbirth]=useState("")
  const[current,setcurrent]=useState("")
  function bir(e){
    setbirth(e.target.value)
  }
  function cur(e){
    setcurrent(e.target.value)
  }
  function sub(e){
    e.preventDefault();
    const result={
      previous:birth,
      newage:current
    }
    console.log( birth-current)
    console.log(result) 
  }
  function display(){
    settheme(!theme)
    
  }
  return (
    <>
    
      <div class="container">
        <div style={{backgroundColor:theme?"pink":"lightpink",height:"100vh"}}>
      {theme}
      <h1  class="one"onClick={display}>{theme?"🔞":"🎁"}</h1>
      <div class="container2">
      <form >
      <h1 style={{textAlign:"center",color:"black",}}>Age calculator</h1><br/><br/>
      <label style={{color:"black",fontSize:"50px"}}>Currentyear: </label><br/><br/>
      <input type="number" value={birth} onChange={bir}/><br/><br/>
      <label style={{color:"black",fontSize:"50px"}}>birthyear: </label><br/><br/>
      <input type="number" value={current} onChange={cur}/><br/><br/><br/>
      <input  style={{background:"silver"}}type="submit" onClick={sub}/>
      </form>
      </div>
      </div>
      </div>
      </>
  )
}

export default Assessment2