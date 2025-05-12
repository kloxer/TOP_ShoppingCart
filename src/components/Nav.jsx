
import HomePage from "./WholePage";
import { Link } from "react-router-dom";

function Nav({cart}){
    let total = 0
    console.log("cart")
    console.log(cart)
    if (cart.length >  1){
        total = cart.reduce((acc,item)=> acc + item.qty, 0);
    }

    const navLinkClass = "hover:underline hover:text-gray-500 font-bold";

    return (
    <div className="bg-amber-600 px-2  shadow-lg border-b-1 border-gray-400">

    <nav className="flex justify-between items-end  pt-5 pb-5 text-white  md:px-30">

    <h1 className="font-bold  text-2xl ">FAKE MART</h1>

        <div className="flex gap-3 font-bold">
            <Link to="/home" className={navLinkClass}>Home</Link>
            <Link to="/shopping" className={navLinkClass}>Store</Link>

        
        <Link to="/cart" className='bg-white text-black rounded-sm px-1' >Cart:{cart.length -1} </Link>
        </div>

        </nav>
    
    </div>)
}

export default Nav;