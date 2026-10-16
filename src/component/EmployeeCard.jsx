import EmployeeSkills from "./EmployeeSkills";
import { Paper,TextField } from "@mui/material";
import { Badge } from "@mui/icons-material";
function EmployeeCard() {
    const employee = {
    name: "Priya",
    role: "Frontend Developer",
    salary: 30000,
    skills: ["React", "JavaScript", "CSS"]
  };
  return (
    <div>
        
      <h2 style={{textAlign:"center",fontSize:"50px"}}>Employee Details</h2><br/>
      <div style={{textAlign:"center"}}>
      <Badge badgeContent={5} color="error"></Badge>
      </div><br/>
      <Paper elevation={7} style={{width:"30%",textAlign:"center",paddingLeft:"20%",height:"10%",marginLeft:"500px"}}>
      <div style={{display:"flex", gap:"10px" ,flexDirection:"column",width:"35%"}}><br/>
      <p>Name: {employee.name}</p><br/>
      <TextField variant="filled"  label="username" helpertext ="username is required" required/><br/>
      <p>Role: {employee.role}</p><br/>
      <TextField variant="filled"  label="Role" helpertext ="Role is required" required/><br/>
      <p>Salary: ₹{employee.salary}</p>
      <TextField variant="filled" type="number" label="salary" helpertext ="Salary is required" required/><br/>
      <EmployeeSkills skills={employee.skills} />
      </div><br/>
      </Paper>
    
      </div>
  );
}

export default EmployeeCard;