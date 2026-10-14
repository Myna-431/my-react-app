const Stud=()=>{
    const info=
        {name:"jenu",age:17,dept:"It"}
        /*{name:"meera",age:18,dept:"It"},
        {name:"ram",age:17,dept:"cse"},
        {name:"riya",age:20,dept:"It"},
        {name:"jeniliya",age:19,dept:"cse"},
        {name:"mithra",age:18,dept:"Aiml"},
        {name:"kavi",age:22,dept:"aiml"},
        {name:"rizza",age:18,dept:"ece"},
        {name:"nila",age:17,dept:"mech"},
        {name:"aishu",age:18,dept:"It"}*/
    
    /*const result=info.map((i)=>{
        return(
            <>
            <h1>{i.name}</h1>
            <p>{i.age}</p>
            <p>{i.dept}</p>
            </>
        )

    })*/
    const {name,...remains}=info
    console.log(remains)
    
    const update={
       ...info,age:"20"
    
    }
    console.log(update)
    return(
        <>
        {name}
        </>
    )
}
export default Stud;