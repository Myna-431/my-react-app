import "./Loginpage.css";
function Loginpage() {
  /*const home={
    Name:"",
    Rollno:"",
    Email:"",
    age:""
  }
  console.log(home);*/

  return (
    
    
    <div class="design">
      
      <div>
      <h1>Admission form</h1>
      <form style={{margin:"50px"}}>
        <label >Name</label><br/>
       <input type="text" placeholder="Enter your name"/><br/><br/>
       <label>Rollno</label><br/>
       <input type="text" placeholder="Enter your number"/><br/><br/>
       <label>Email</label><br/>
       <input type="email" placeholder="Enter your email"/><br/><br/>
       <label>age</label><br/>
       <input type="number" placeholder="Enter your age"/><br/><br/>
       <div>
       <label>gender</label><br/><br/>
       <select>
        <option>male</option>
        <option>female</option>
       </select><br/><br/>
       <div class="view">
       <button style={{backgroundColor:"red",color:"black"}}>Submit</button><br/>
       
       </div>
       </div>
      </form>
      </div>
    </div>
  )
}

export default Loginpage
