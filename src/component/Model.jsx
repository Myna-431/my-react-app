import'./Model.css';
import{useState} from"react";
function Model(){
    const[mod,setmod]=useState(false)
    return(
        <>
        <div >modelbox</div>
        {mod?
        <div class="one">
        <span>are you sure ?do you want to continue</span><br/>
        <button onClick={()=>setmod(false)} >ok</button>
        </div>:""}
        <button onClick={()=>setmod(true)}>confirm</button>
        <div class="overlay">
            <div class="popup">
            <button class="btn">change</button>
            <img src={"src/assets/img.png"}width={"100px"}height={"100px"}/>
            <h4>secure all your device</h4>
            <p>ensure your mobile,laptop and other device</p>
            <button class="premieum">purchage permium</button>
            </div>
        </div>
        </>

    )
}
export default Model;