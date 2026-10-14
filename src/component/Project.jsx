import "./Project.css";
import{useState} from"react";

const Project=()=>{
    const[value,setvalue]=useState(false);
    const[Input,setInput]=useState("");
    const[email,setemail]=useState("");
    console.log(email)
    const[age,setage]=useState("0");
    console.log(age);
    function result(){
   // setvalue(value==0?1:0)
   setvalue(!value)
}
console.log(value);
function getdata(event){
    setInput(event.target.value);
}
function handle(event){
    event.preventDefault();
    alert(Input)
}
function mail(event){
    setemail(event.target.value);
}
function agee(event){
    setage(event.target.value);
}
    return(
        <div style={{background: value?"white":"black",height:"100vh"}}>
        {value}
        <span style={{cursor:"pointer"}}onClick={result}>{value?"☀️":"🌙"}</span>


        <form onSubmit={handle}>
            Name:<input onChange={getdata}/><br/>
            Email:<input onchange={mail}/><br/>
            Age:<input onchange={agee}/><br/>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}
export default Project;