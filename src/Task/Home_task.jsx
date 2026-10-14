
import'./Home_task.css';
const Home_task=()=> {
  const info=[{
    id:"24IT063",
    name:"Mynadevi",
    username:"Student_01",
    contact:"1234567891",
    role:"student",
    skills:["problem solving","coding","team work"],
    location:"salem",
    About:"",
    Project:[
      {
      tittle:"portfolio website",
      description:"using react.js"
    },

    {tittle:"shopping website",
      description:"using react.js"
    },

    {tittle:"Admission form",
      description:"using react.js"
    }

  ],
    social:["Linkedin","github","Instagram"],
    Accord:[{}],
  }
]
const display=info.map((i)=>{
  return(
    <>
    <h1 style={{color:'#245F73',fontSize:'80px'}}>{i.name}</h1><br/>
    <h2 style={{fontSize:'30px'}}>{i.id}</h2><br/>
    <h2 style={{fontSize:'30px'}}>{i.username}</h2><br/>
    <h2 style={{fontSize:'30px'}}>{i.role}</h2><br/>
    <h2 style={{fontSize:'30px'}}>{i.skills.join("|")}</h2><br/>
    <h2 style={{fontSize:'30px'}}>{i.location}</h2><br/>
    <h3>{i.social.join("|")}</h3><br/>
    <p>{i.contact}</p>
    </>
  )
})

  return (
    <>
  
    <div class="overview">
      <div>
      <h1 style={{fontSize:'100px'}}>Portfolio</h1><br/><br/>
      {display}
      </div>
      <div>
        <h1 class="view">welcome!</h1><br/><br/>
        <h1 style={{marginTop:'80px'}}> I'm a Web Developer</h1>
      </div>
    </div>
    </>
  )
}

export default Home_task

