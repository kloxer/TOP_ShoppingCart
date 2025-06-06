import { useEffect, useState } from "react"


export default function ShoppingView({updateCart, products, loading, error, showPopup}){


    if (loading){
        return (<h2>Loading...</h2>)
    }
    return(<>
        <ProductCardGrid products={products} updateCart={updateCart} showPopup={showPopup}/>

        </>)
}

function ProductCardGrid({products ,updateCart, showPopup}){

    
    return(
    <div className="grid grid-cols-1 gap-2 m-2  sm:grid-cols-2 md:grid-cols-3 md:max-w-screen-md mx-auto px-2 sm:px-7" >



    {products.map(product=>(
       <IndividualProduct product={product} addToCart={updateCart} showPopup={showPopup} /> 
        
        ))}
    </div>)

}

function IndividualProduct({product, addToCart, showPopup}){

    const [quantity, setQuantity] = useState(1)

    function handleQuantityChange(e){
        if (parseInt(e.target.value) < 1 || parseInt(e.target.value) == 0){
            e.target.value = 1; // Reset to 1 if out of bounds
            console.log("Quantity cannot be less than 1");
        }
        else{
        setQuantity(parseInt(e.target.value));
    }
    }
    
    function increaseQty(){
        setQuantity(quantity => quantity + 1)
    }
    function decreaseQty(){
        if (quantity <= 1){
            console.log("Quantity cannot be less than 1");
            return;
        }
        setQuantity(quantity => quantity - 1)

    }
    return(
    <div key={product.id} className="shadow-md  flex  justify-between flex-col bg-white  px-2 py-4 gap-1 border-1 border-gray-300" >
    
    {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg  animate-fade-in-out">
          ✅ Item added to cart!
        </div>
      )}


        <img className="w-full h-50 object-contain" src={product.image} alt="" />
        
    

    
    <div className="flex flex-col gap-2 items-center" >
        <p className="font-extralight text-sm">{product.category}</p>
        <h2 className="font-bold text-center ">{product.title}</h2>
        <label htmlFor="ammount" className="text-center text-blue-700 font-bold text-xl">${product.price}</label>
        <div className="updateAmmount text-center" >
            <button className="cursor-pointer  rounded-2xl font-bold px-3 py-2 bg-gray-300 text-black " 
            onClick={()=>decreaseQty()}>&#45;</button>


            <span className="text-center overflow-hidden text-xl font-bold"
>{quantity}</span>
            
            <button onClick={()=>increaseQty()}
            className="cursor-pointer rounded-2xl font-bold px-3 py-2 bg-gray-300 text-black " >&#43;</button>


        </div>
        <button className="cursor-pointer sm:w-11/12 w-10/12 py-1 text-lg font-bold border-2 rounded-xl  bg-blue-500 text-white" 
        id={product.id}  onClick={()=> addToCart(product.id,quantity)}>Add to cart</button>
    </div>

</div>
    )
}