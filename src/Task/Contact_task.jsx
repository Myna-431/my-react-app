import'./Contact_task.css'
import {useState} from "react"
function Contact_task() {
  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  function namehandling(e){
    setname(e.target.value)
  }
  function mailhandling(e){
    setemail(e.target.value)
  }
  function change(e){
    e.preventDefault();
    const view={
      Name:name,
      Email:email
    }
    console.log(view)
  }

  return (
    <>
      <div class="Boxmodel">
      <div class="contactcontainer">
        <form>
          <h1 style={{textAlign:"center"}}>Contact us</h1><br/>
          <label style={{fontSize:"30px",color:"black"}}>Name:</label><br/>
          <input type="text" value={name} onChange={namehandling}/><br/><br/>
          <label style={{fontSize:"30px",color:"black"}}>Email</label><br/>
          <input type="email" value={email} onChange={mailhandling}/><br/><br/><br/>
          <input  style={{backgroundColor:"rgb(116, 107, 145)"}}type="submit" onClick={change}/>
      </form>
      </div>
      <div class="Call">
        <div class="callus">
        <h1>call us</h1><br/>
        <p style={{color:"black"}}>1234567891</p>
        </div>
        <div class="linkedin">
        <h1>Instagram</h1><br/>
        <p style={{color:"black"}}>itzz_myna_11</p>
        </div>
        <div class="github">
        <h1>likedin</h1><br/>
        <p style={{color:"black"}}>Mynadevi_201</p>
        </div>
        <div class="instagram">
        <h1>github</h1><br/>
        <p style={{color:"black"}}>mynadevi1234</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact_task
