import'./Accord_task.css'
import {useState} from "react"
const Accord_task=()=> {
  const[open,setopen]=useState(null);
  const info=[

    {Tittle:"Soft Skills",para:"*Soft skills are the personal and interpersonal habits that shape how you work and interact with others. Unlike hard skills—which are technical abilities like coding or accounting—soft skills include communication, teamwork, problem-solving, and time management. These traits help you adapt to change, resolve conflicts, and build trust in any job or everyday situation. Employers value soft skills just as much as technical expertise because they make collaboration smoother and drive long-term career growth"},
    {Tittle:"Problem Solving",para:"*When employers talk about problem-solving skills, they are often referring to the ability to handle difficult or unexpected situations in the workplace and even complex business challenges.Problem-solving skills are the cognitive processes and practical abilities used to find effective solutions to difficult or unexpected challenges. Clarify the issue, collect data, and find the root cause using methods like the 5 Whys."},
    {Tittle:"Team Work",para:"*Teamwork is the act of people working together with shared goals and mutual support to achieve results that no single person could easily reach alone. When individuals combine their unique skills, ideas, and perspectives, tasks become faster, lighter, and more creative. Good teamwork builds strong communication, teaches patience, and turns challenges into shared victories whether in school projects, sports, or the workplace."}
  ]

  function handle(Tittle)
  {
    setopen(open==Tittle?null:Tittle)
  }
  return (
    <>
{
      info.map((i)=>{
    return(
      <>
      <div class="container">
      <div class="headingstyle">
      <h1 onClick={()=>handle(i.Tittle)}>{i.Tittle}</h1><br/>
      {open===i.Tittle?<h2>{i.para}</h2>:" "}<br/>
      </div>
      </div>
      </> 
    )
  }
)
}
  </> 
    )

}

export default Accord_task
