import Home_task from'./Task/Home_task.jsx'
import  Login_task from'./Task/Login_task.jsx'
import Project_task from './Task/Project_task.jsx'
import Accord_task from './Task/Accord_task.jsx'
import Skills_task from './Task/Skills_task.jsx'
import About_task from './Task/About_task.jsx'
import Contact_task from './Task/Contact_task.jsx'
import Navbar from './Task/Navbar.jsx'
import {Routes,Route} from'react-router-dom'
function App(){
    return(
        
        <div>
            <Navbar/>
        <Routes>
            
            <Route path="/"element={<Home_task/>}/>
            <Route path="/Login_task" element={<Login_task/>}/>
            <Route path="/Project_task" element={<Project_task/>}/>
            <Route path="/Accord_task" element={<Accord_task/>}/>
            <Route path="/Skills_task" element={<Skills_task/>}/>
            <Route path="/About_task" element={<About_task/>}/>
            <Route path="/Contact_task" element={<Contact_task/>}/>
        </Routes>
            

        </div>
        
    )
}
export default App;
