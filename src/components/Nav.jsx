import "./Nav.css"

import HomePage from "./WholePage";
import { Link } from "react-router-dom";

function Nav(){
    return (
    <div className="pageTop">
    <h1>FAKE MART</h1>

    <nav className="nav">
        <div className="leftNav">
            <Link to="/home">Home</Link>
            <Link to="/shopping">Store</Link>
        </div>

        <a href="">Cart</a>


        </nav>
    
    </div>)
}

export default Nav;