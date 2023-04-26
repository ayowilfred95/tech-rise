import "./Navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
             <header>
             <nav>
                <div className="logo">
               <Link to="/"><h1>TechRise<span className="rise">An initaiative of future rise</span></h1></Link> 
                </div>
             <Link to="/apply">Apply to TechRise</Link>
             <Link to="/news">News</Link>
             <Link to="/events">Events</Link>
            <Link to="/about">About TechRise</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
        </header>

     );
}
 
export default Navbar;
