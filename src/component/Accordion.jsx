import "./Accordion.css";
import{useState} from "react"
const Accordion=()=>{
    const[open,setopen]=useState(null);
    const accor=[
        {id:1,tittle:"accordion1",para:"para1"},
        {id:2,tittle:"accordion2",para:"para2"}
    ]
    function handleId(id){
        //console.log(id)
        setopen(open==id?null:id)
    }
    
        /*<p classname="head" onclick={display}>Accordion 1</p>
        {open?
        <p>Most paragraphs are four to six sentences long, but they can be shorter or longer depending on the style of writing. On Reddit, opinions are mixed on exact length rules, though writers agree that a clear line break defines where a paragraph starts.</p>:""}
        <p classname="head">Accordion 2</p>
        <p>Supporting sentences: The middle sentences give facts, details, or examples to explain the main idea.</p>*/
        return(
            <>
            {
                accor.map((res)=>{
                    return(
                        <>
                        <p class="head" onClick={()=>handleId(res.id)}>{res.tittle}</p>
                        {open?<p>{res.para}</p>:""}
                        </>
                    )
                })
            }
                </>
    )
}
export default Accordion;