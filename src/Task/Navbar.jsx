import { NavLink } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <div >
        <nav >
            <ul style={{display:"flex", gap:"140px"}}>
                <li >
                    <NavLink to={"/"}>Home_task</NavLink>
                </li>
                
                <li>
                    <NavLink to={"/Login_task"}>Login_task</NavLink>
                </li>
                <li>
                    <NavLink to={"/Project_task"}>Project_task</NavLink>
                </li>
                <li>
                    <NavLink to={"/Accord_task"}>Accord_task</NavLink>
                </li>
                <li>
                    <NavLink to={"/skills_task"}>Skills_task</NavLink>
                </li>
                <li>
                    <NavLink to={"/About_task"}>About_task</NavLink>
                </li>
                <li>
                    <NavLink to={"/Contact_task"}>Contact_task</NavLink>
                </li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
