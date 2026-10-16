 import { TextField } from "@mui/material";
 function Student() {
  const student = {
    name: "Arun",
    department: "MERN Stack"
  };
  return (
    <div>
      <div>
      <h2>Student Information</h2>
      </div>
      <div>
      <p>Name: {student.name}</p>
      <TextField variant="filled" label="username"  helperText="user name is required"/><br/>
      </div><br/>
      <p>Department: {student.department}</p><br/>
      <TextField variant="filled" label="Department"  helperText="Department is required"/><br/>
    </div>
  );
}

export default Student;