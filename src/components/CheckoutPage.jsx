import { useEffect, useState } from "react"
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
        <h2 className="text-center text-xl font-bold my-4">No items in cart</h2></>)
    }

    const totalling = cartFilter.reduce((acc,item)=> 
        (acc + (parseFloat(productMap[item.id].price) * parseFloat(item.qty))
    ),0);
    const rounded = (Math.round(totalling * 100)/100).toFixed(2);

    const totalQty = cartFilter.reduce((acc,item)=> (acc + (item.qty)), 0);

    return(
    <div className="flex flex-col px-2 py-4  gap-4 sm:w-9/12 m-auto">

    <div className="leftSide flex gap-5 flex-col ">
    {cartFilter.map(item => (
    <CheckoutCard item={item} productMap = {productMap} key={item.id}  updateCart={updateCart}/>

    ))}
    </div>
    <div className="text-center flex flex-col gap-3 ">
        <p>  {totalQty} items</p>
        <h2>Subtotal <span className="font-bold ">${rounded}</span></h2>
        <button className="bg-amber-400 px-4 py-2 cursor-pointer">Checkout</button>
    </div>

    
    </div>)
}

function CheckoutCard({item, productMap, updateCart}){
    const [quantity, setQuantity] = useState(0)
    const price = productMap[item.id].price * item.qty;



    function handleQuantityChange(e){
        updateCart(item.id, e.target.value);
        // setQuantity(e.target.value);
    }
    function removeProduct(){
        console.log("removing...")
        updateCart(item.id,0)
    }

    return (
        <div className=" border-1 border-gray-300 shadow-xl px-1 py-2  flex gap-4" key={item.id}>
<div className="w-32 h-32 bg-white flex items-center justify-center overflow-hidden">
<img    className=" h-full object-contain"
 src={productMap[item.id].image} alt="" />
            </div>
        
        <div className=" flex flex-col gap-3">
            <p className=" text-sm">{productMap[item.id].category}</p>
            <div className="titleAndPrice">
                <h2>{productMap[item.id].title}</h2>
                <p className=" ">Price: 
                    <span className="font-bold"> ${productMap[item.id].price}</span> 

                </p>
            </div>
            <p className="qty">Quantity: <input id={item.id} value={item.qty} type="number" onChange={handleQuantityChange}/> </p>
            <button id={item.id} onClick={()=> removeProduct()} className="bg-red-700 text-white rounded-sm py-1 w-70 cursor-pointer">Remove </button>

        </div>

            </div>
    )
}
export default CheckoutPage