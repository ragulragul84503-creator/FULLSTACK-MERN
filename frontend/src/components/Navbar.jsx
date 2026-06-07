import React from 'react'
import { Link } from 'react-router-dom'
import'./Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className= "container">
                 <li className="list"><Link className="link" to ="/Home">Home</Link></li>
                 <li className="list"><Link className="link" to ="/About">About</Link></li>
                 <li className="list"><Link className="link" to="/Service">Service</Link></li>
                <li className="list"><Link className="link" to ="/Contact">Contact</Link></li>
                 <li className="list">
                  <Link className="link" to ='/Parent'>props</Link>
                 </li>
                 <li className="list">
                  <Link className="link" to ='/useState'>useState</Link>
                 </li>
                 <li className="list">
                  <Link className="link" to ='/useEffect'>useEffect</Link>
                 </li>

            </ul>
            </nav>
    </div>
  )
}

export default Navbar