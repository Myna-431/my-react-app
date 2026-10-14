import'./Login_task.css'
import {useState} from "react"
const Login_task=()=>{
  const[username,setusername]=useState("")
  const[password,setpassword]=useState("")
function userhandling(e){
  setusername(e.target.value)

}
function passhandling(e){
  setpassword(e.target.value)
}
function result(e){
  e.preventDefault();
  const data={
    name:username,
    pass:password
  }
  console.log(data)
}

  return (
    <div class="container">
      <div class="boxmodel">
      <form class="display">
        <label style={{fontSize:'50px'}}>Username: </label><br/><br/>
        <input  type='text' value={username} onChange={userhandling}/><br/><br/>
        <label style={{fontSize:'50px'}}>Password: </label><br/><br/>
        <input type='password' value={password} onChange={passhandling}/><br/><br/><br/>
        <input style={{backgroundColor:" rgb(116, 107, 145)"}}type='submit' onClick={result}/>
      </form>
      </div>
      
    </div>
  )
}

export default Login_task
