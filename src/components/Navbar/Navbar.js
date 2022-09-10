import React, {useState} from 'react'
import './Navbar.css';
import { Link} from "react-router-dom";
import Search from '../images/Search.png'
import bars from '../images/bars.png'

const Navbar = () => {
    const[showLinks, setShowLinks] = useState(false);
  return (
           <div className="Navbar">
            <div className='logo'>
                <p>FindDoct</p>
            </div>
            <div className="leftSide">
            <div className="links" id={showLinks ? "hidden" : ""}>
                <Link to="/">Home</Link>
                <Link to="/Doctors">Doctors</Link>
                <Link to="/FindYourDoc">FindYourDoc</Link>
                </div>
                <button className='b3' onClick={() => setShowLinks(!showLinks)}><img src={bars} alt=""/></button>
                </div>
                <div className="rightSide">
                    <input type="text" placeholder="Search Here" />
                    <button className='b1'><img src={Search} alt="" /></button>
                    <div className='signup'> 
                      <Link to="/Register">SignUp</Link>
                      </div>
                      </div>
                </div>
  )
}

export default Navbar
