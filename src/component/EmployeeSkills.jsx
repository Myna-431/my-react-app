function EmployeeSkills({ skills }) {
  return (
    <div>
      <h3>Skills</h3>
      {skills.map((skill) => (
        <p>{skill}</p>
      ))}
    </div>
  );
}

export default EmployeeSkills;