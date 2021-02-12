import "./Nav.css"  
import { NavLink } from "react-router-dom"; 


const Nav = () => {
  return (
    <nav> 
      <div className="nav"> 
        <NavLink className="nav-home" to="/">Markell Dehaney</NavLink>
        <NavLink to="/about">About</NavLink> 
        <NavLink to="/contact">Contact</NavLink> 
      </div>
    </nav>
  )
} 
export default Nav;