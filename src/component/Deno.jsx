import {useState} from "react";
    const Deno=()=>{
        const[form,setform]=useState({name:"",age:0,dept:""})
        const[value,setvalue]=useState(
            {name:"myna",age:12,dept:"IT "}
        )
        function change(event){
            setvalue({
                ...value,
                [event.target.name]:event.target.value
                
            })
        }
        
        function submit(event){
            event.preventDefault();
            setform(
                {
                    ...form,
                    name:value.name,
                    age:value.age,
                }
            );
        }

    return(
        <>
        <form onSubmit={submit}>
        <input onChange={change} name={"name"}placeholder="Enter your name"/><br/>
        <input onChange={change}name={"age"}placeholder="Enter your age"/><br/>
        <button type="submit">submit</button>
        </form>
        </>
    )

}
export default Deno;