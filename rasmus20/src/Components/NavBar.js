import '../style.css';
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li><Link to="/">Startsida</Link></li>
                <li><Link to="/Aboutme">Presentation</Link></li>
                <li><Link to="/Mycv">Mitt CV</Link></li>
                <li><Link to="/Myportfolio">Min Portfölj</Link></li>
                <li><Link to="/Contactme">Kontakta Mig</Link></li>
            </ul>
        </nav>   
     );
}
 
export default Navbar;