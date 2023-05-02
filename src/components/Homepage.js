import Navbar from "./Navbar";
import "./Homepage.css";
import rise from "../assets/rise-tech.png"
import { Link } from "react-router-dom";

const Homepage = () => {
    return ( 
        <div>
            <div>
            <Navbar></Navbar>
            </div>
            <div className="i">
                <div className="i-left">
                <h1>THIS IS WHAT BRILLIANT LOOKS LIKE </h1>
                
                <div className="i-left-text">
                    <p>Rise is a program that finds promising young people and provides opportunity for life as they work to serve others.</p>
                </div>
                <div>
                   <Link to="/apply"><button>Join TechRise</button></Link> 
                </div>
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    <img src={rise} alt="img" className="i-img" />
                    <div className="i-text">
                    <h1>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit minus placeat veniam adipisci, voluptate a animi quam corrupti deleniti, ad ut eius, eaque repudiandae numquam. Quas libero eius cupiditate.</h1>
                    </div>
                 </div>
               
            </div>
        </div>
     );
}
 
export default Homepage;
