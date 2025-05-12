import cart from "../images/cart.jpg"
import { Link } from "react-router-dom"
export default function EntryInfo(){

    return(
        <div id="homePage" className="px-4 md:w-10/12 mx-auto flex flex-col md:flex-row justify-between  py-15 gap-20"  >
        <div className="leftSide self-center mx-auto flex flex-col gap-10 ">
            <p className="font-bold text-3xl">Elevate Your Shopping
            with <span className="text-blue-600 ">Smart Deals</span></p>
            <p className="text-lg">Shop from curated collections of top-quality products. Lightning-fast browsing, secure cart management, and seamless checkout — all powered by <span className="font-bold">React</span>.</p>
            <Link to="/shopping" className="cursor-pointer md:w-2/5 py-2 px-4 text-lg font-bold border-2 rounded-xl  bg-blue-500 text-white" >
            Shop Now!</Link>
        </div>

        <img src={cart} className="md:w-6/12 object-cover rounded-md bg-gray-300">
        </img>
        
        </div>
    )
}

