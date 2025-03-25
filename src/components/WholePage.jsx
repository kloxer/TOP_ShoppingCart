import Nav from "./Nav"
import EntryInfo
 from "./EntryInfo"
import "./WholePage.css"

import { useEffect, useState } from "react"

 import { useParams } from "react-router-dom";
import ShoppingView from "./Shopping";
import CheckoutPage from "./CheckoutPage";

function WholePage(){
    const {name} = useParams();

    const [cart, setCart] = useState([{
        id:0,
        qty:0,

    }])


    function updateCart(id,qty){
        let quantity = parseInt(qty)
        const existingItem = cart.find(item => item.id == id)
        if (existingItem){
            console.log("old item")
            if (quantity > 0){
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
                setCart(cart.filter(item => item.id != id));
            }
 
        }
        else{
            console.log("new item")
            if (quantity > 0){
                setCart([
                    ...cart,
                    {
                        id:id,
                        qty:quantity
                    }
                ])
            }
  
        }
        
    }


    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function getProducts(){
            
                fetch('https://fakestoreapi.com/products')
                .then(response => {
                    if ((response.status) == 400){
                        throw new Error("Servo Error");
                    }
                    
                    return response.json()
                })
            .then(response => {
                console.log(response)
                setProducts(response)
            })
            .catch((error) => {
            setError(error);
          })
          .finally(()=> setLoading(false));
        }
        getProducts();
       
    }, [])

    return(<>
    <Nav cart={cart}/>
    
    {name === "home" ? (
    (<EntryInfo />)
    ) : name ==="shopping" ? 
    (<ShoppingView updateCart={updateCart} products={products} loading={loading} error={error}/>)
    : name ==="cart" ?
(<CheckoutPage cart={cart} products={products} loading={loading} error={error}  updateCart={updateCart} />):
    
    (<EntryInfo />)} 
    
    </>)
}

export default WholePage