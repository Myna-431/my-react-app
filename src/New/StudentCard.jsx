import axios from "axios"
import { Paper,TextField } from "@mui/material";
import {useState,useEffect} from "react";
function StudentCard(props) {
    const[data,setdata]=useState([])
        useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error));
        },[])
  return (
    <div style={{backgroundColor:"coral"}}>
        {data.map((i)=>{
            return(
                <>
                <p>{i.Name}</p>
                <p>{i.Email}</p>
                </>
            )
        })}
        <h1 style={{textAlign:"center"}}>Student details application</h1>
        <div style={{marginLeft:"500px"}}>
        <Paper elevation={7} style={{width:"50%",textAlign:"center",padding:"7%",height:"10%",backgroundColor:"bisque"}}>
        <div style={{display:"flex", gap:"30px" ,flexDirection:"column",width:"35%",marginleft:"10px"}}>
      <h1> name: {props.name}</h1><br/>
      <TextField variant="filled"  label="name" helpertext ="name is required" required/><br/>
      <h1> username: {props.username}</h1><br/>
      <TextField variant="filled"  label="username" helpertext ="username is required" required/><br/>
      <h1> email:{props.email}</h1><br/>
      <TextField variant="filled"  label="email" helpertext ="email is required" required/><br/>
      <button  style={{fontSize:"20px",border:"2px solid",backgroundColor:"coral" }}>Button</button>
      </div>
      </Paper>
      </div>
    </div>
    
  );
}
export default StudentCard ;