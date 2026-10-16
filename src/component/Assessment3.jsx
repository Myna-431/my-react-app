import { Paper, TextField} from "@mui/material"
import {Button} from "@mui/material"
import {LockOutlinedIcon} from "@mui/material"
const Assessment3 = () => {
  return (
    <div>
        <Paper elevation={7} style={{width:"50%",textAlign:"center",padding:"7%",height:"40%"}}>
            <LockOutlinedIcon  ex={{color:"grey",fontsize:"10px"}}/>
    <div style={{display:"flex", gap:"30px" ,flexDirection:"column",width:"15%",marginleft:"10px"}}>
        <TextField variant="filled"  label="username" helpertext ="username is required" required/><br/><br/>
        <TextField variant="filled"   type="password" label="password" helpertext ="password is required" required/>
        <Button variant ="contained" > signup</Button>
    </div>
    </Paper>
    </div>
  )
}

export default Assessment3
