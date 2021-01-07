import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="Header">
            <h1> Tune It Up</h1>
            <nav>
                <ul className="NavLinks">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/songs">Song</Link></li>

                </ul>
            </nav>
            


        </div>
    )
}
export default Header;