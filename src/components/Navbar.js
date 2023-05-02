import "./Navbar.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



const Navbar = () => {
   const[show, handleShow] = useState(false);


   useEffect(()=>{
       window.addEventListener("scroll", ()=>{
           if (window.scrollY > 100) {
               handleShow(true);
           }else handleShow(false);
       });
       return () => {
           window.removeEventListener("scroll",null);
       };
   },[]);



    return ( 
           <header>
             <nav className={`nav ${show && "nav_black"}`} >   
               <h1>TechRise<span className="rise">An initaiative of future rise</span></h1>
               <Link to="/">Home</Link>  
             <Link to="/apply">Apply to TechRise</Link>
             <Link to="/news">News</Link>
             <Link to="/events">Events</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        </header>

     );
}
 
export default Navbar;
