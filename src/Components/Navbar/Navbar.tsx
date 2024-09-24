import {NavLink, Link } from 'react-router-dom';
import '../../styles.scss'

function Navbar() {
    return (
      <div className="Navbar">
        <div className='logo'> 
            <img src='./George.png'></img>
        </div>
        <div className='nav-tabs'>
          <div className='tab'>
            <NavLink className="link" to="/"><h2>Home</h2></NavLink>
          </div>
          <div className='tab'>
            <NavLink className="link" to="/projects"><h2>Projects</h2></NavLink>
          </div>
          <div className='tab'>
            <NavLink className="link" to="/cv"><h2>CV</h2></NavLink>
          </div>
          <div className='tab'>
            <NavLink className="link" to="/contact"><h2>Contact</h2></NavLink>
          </div>
        </div> 
      </div>
    );
  }
  
  export default Navbar;