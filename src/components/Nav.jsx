
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
    <div className="flex flex-col border-b-4 gap-3 pt-7 pb-2 px-4">
    <h1 className="text-xl font-bold text-center ">FAKE MART</h1>

    <nav className="flex flex-row justify-between ">
        <div className="flex gap-2">
            <Link to="/home" className="hover:bg-blue-500">Home</Link>
            <Link to="/shopping">Store</Link>
        </div>
        
        <Link to="/cart">Cart: {cart.length -1} </Link>


        </nav>
    
    </div>)
}

export default Nav;