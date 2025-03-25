import "./Nav.css"

import HomePage from "./WholePage";
import { Link } from "react-router-dom";

function Nav({cart}){
    let total = 0
    console.log("cart")
    console.log(cart)
    if (cart.length >  1){
        total = cart.reduce((acc,item)=> acc + item.qty, 0);
    }

    return (
    <div className="pageTop">
    <h1>FAKE MART</h1>

    <nav className="nav">
        <div className="leftNav">
            <Link to="/home">Home</Link>
            <Link to="/shopping">Store</Link>
        </div>
        
        <Link to="/cart">Cart: {cart.length -1} </Link>


        </nav>
    
    </div>)
}

export default Nav;