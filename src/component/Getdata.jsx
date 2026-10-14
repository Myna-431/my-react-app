import {useEffect,useState} from "react";
import axios from 'axios'
const Getdata=()=> {
    const[data,setdata]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{setdata(res.data)})
    },[])
  return (
    <div>
      <table>
        <thead  >
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Id</th>
            </tr>
        </thead>
        {data.map((i)=>{
            return(
                <>
                <tbody>
                    <tr>
                        <td>{i.Name}</td>
                        <td>{i.Email}</td>
                        <td>{i.Id}</td>
                    </tr>
                </tbody>
                </>
            )
        })}
      </table>
    </div>
  )
}

export default Getdata
