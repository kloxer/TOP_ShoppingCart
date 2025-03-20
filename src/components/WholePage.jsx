import Nav from "./Nav"
import EntryInfo
 from "./EntryInfo"
import "./WholePage.css"

import { useEffect, useState } from "react"

 import { useParams } from "react-router-dom";
import ShoppingView from "./Shopping";

function WholePage(){
    const {name} = useParams();

    const [cart, setCart] = useState([{
        id:0,
        qty:0
    }])


    function updateCart(id,qty){
        let quantity = parseInt(qty)
        const existingItem = cart.find(item => item.id == id)
        if (existingItem){
            console.log("old item")
            setCart(cart.map(item => {
                if (item.id === id){
                    console.log(item)
                    return(
                        {
                    ...item,
                    qty: quantity
                    }   
                    )
                }
                else{
                    return item;
                }
            }))
        }
        else{
            console.log("new item")
            setCart([
                ...cart,
                {
                    id:id,
                    qty:quantity
                }
            ])
        }
        
    }

    return(<>
    <Nav cart={cart}/>
    
    {name === "home" ? (
    (<EntryInfo />)
    ) : name ==="shopping" ? 
    (<ShoppingView updateCart={updateCart}/>)
    : (<EntryInfo />)} 
    
    </>)
}

export default WholePage