import { Link } from 'react-router-dom'
import '../App.css'

function Nav(props) {
    return (
      <nav>
        <ul className="NavLinks">
            <li ><Link to="/" className="homelink">Home</Link></li>
            
        </ul>
      </nav>
    );
}

export default Nav;
