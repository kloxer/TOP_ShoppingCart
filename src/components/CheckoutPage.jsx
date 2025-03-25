import { useEffect, useState } from "react"
import "./CheckoutPage.css"
function CheckoutPage({cart,products,loading,error, updateCart}){
    // so now I want to filter from products the Id's i actually have
    const cartFilter = cart.slice(1) // Filter out the first empty item
    console.log(cartFilter)

    const [total, setTotal] = useState(0);

    const productMap = {}
    if (products){
        for (const prod of products){
            productMap[prod.id] = prod
            console.log(productMap[prod.id])

        }
    }

    if (cartFilter.length < 1  || productMap.length <= 1){ //only the test in the cart
        return(<>
        <h2>no items chosen</h2></>)
    }

    const totalling = cartFilter.reduce((acc,item)=> 
        (acc + (parseFloat(productMap[item.id].price) * parseFloat(item.qty))
    ),0);

    const totalQty = cartFilter.reduce((acc,item)=> (acc + (item.qty)), 0);

    return(
    <div className="checkoutGrid">

    <div className="leftSide">
    {cartFilter.map(item => (
    <CheckoutCard item={item} productMap = {productMap} key={item.id}  updateCart={updateCart}/>

    ))}
    </div>
    <div className="totalling">
        <h2>Subtotal ${totalling}</h2>
        {totalQty} items
    </div>

    
    </div>)
}

function CheckoutCard({item, productMap, updateCart}){
    const [quantity, setQuantity] = useState(0)

    function handleQuantityChange(e){
        updateCart(item.id, e.target.value);
        // setQuantity(e.target.value);
    }
    return (
        <div className="checkoutCard" key={item.id}>
        <div className="leftSide"><img className="productImages" src={productMap[item.id].image} alt="" /></div>
        <div className="rightSide">
            <div className="titleAndPrice">
                <h2>{productMap[item.id].title}</h2>
                <p className="price">Price: ${productMap[item.id].price}</p>
            </div>
            <p className="qty">Quantity: <input id={item.id} value={item.qty} type="number" onChange={handleQuantityChange}/> </p>

    
        </div>
            </div>
    )
}
export default CheckoutPage