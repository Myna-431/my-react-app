import {useState} from "react";
import'./Assignment.css'
const Assignment=()=>{
    const[value,setvalue]=useState([
            {task:1,taskname:"python",completed:true},
            {task:2,taskname:"java",completed:false},
            {task:3,taskname:"javascript",completed:true}]
            );
    const[dark,setdark]=useState(false)
    const completedtask=value.filter((res)=>{return res.completed==true});
    const pending=value.filter((result)=>{return result.completed==false});        
        
    const display=value.map((i)=>{
        return(
            <>
            <div>
            <h3>{i.task}</h3>
            <h3>{i.taskname}</h3>
            <p>{i.completed?"completed":"pending"}</p>
            </div>
            </>
        )
    })
    
    
    return(

        <div style={{backgroundColor:dark?"black":"white",color:dark?"white":"black",minHeight:"100hv",padding:"20px"}}>
        <h1 class="head">task management</h1>
        <div class="result">
        <h4 class="key">totaltask:{value.length}</h4>
        <h4 class="key">completed:{completedtask.length}</h4>
        <h5 class="key">pending:{pending.length}</h5>
        
        
        <button onClick={()=>setdark(!dark)}>submit</button>
        </div>

        </div>
    )
}
export default Assignment;