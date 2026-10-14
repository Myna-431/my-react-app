import {useState} from "react"
function Error({data})
{
    console.log(data)
    
    const[value,setvalue]=useState({
        name:"",
        email:"",
        mobile:""
    })
    const[error,seterror]=useState({
        nameerror:"",
        emailerror:"",
        mobileerror:""
    })
    function result(event){
        setvalue( 
            {
            ...value,
            [event.target.name]:event.target.value
            }
        )

    }
    function handle(event){
        event.preventDefault();
        
            seterror({
                ...error,
                nameerror:value.name.trim()==""?"the filed is required":"",
                emailerror:value.email.trim()==""?"the emial is required":""
            })
        
    }
    return(
        <div>

        <form onSubmit={handle}>
        <input type="text" placeholder="Name" name="name" onChange={result}/><br/><br/>
        <span style={{color:"red"}}>{error.nameerror}</span><br/>
        <input type="email" placeholder="Email" name="email" onChange={result}/><br/><br/>
        <span style={{color:"blue"}}>{error.emailerror}</span><br/>
        <input type="number" placeholder="Mobile" name="mobile" onChange={result}/><br/><br/>
        <button type="submit">submit</button>
        </form>

        </div>
    )
}
export default Error