import "./Nav.css"

import HomePage from "./WholePage";
import { Link } from "react-router-dom";

function Nav({cart}){
    const total = cart.reduce((acc,item)=> acc + item.qty, 0);

    return (
    <div className="pageTop">
    <h1>FAKE MART</h1>

    <nav className="nav">
        <div className="leftNav">
            <Link to="/home">Home</Link>
            <Link to="/shopping">Store</Link>
        </div>
        
        <a href="">Cart : {total}</a>


        </nav>
    
    </div>)
}

export default Nav;