import { useEffect, useState } from "react"


export default function ShoppingView({updateCart, products, loading, error}){


    if (loading){
        return (<h2>Loading...</h2>)
    }
    return(<>
        <ProductCardGrid products={products} updateCart={updateCart}/>

        </>)
}

function ProductCardGrid({products ,updateCart}){

    
    return(
    <div className="grid grid-cols-1 gap-2 m-2  sm:grid-cols-2 md:grid-cols-3 md:max-w-screen-md mx-auto px-2 sm:px-7" >



    {products.map(product=>(
       <IndividualProduct product={product} addToCart={updateCart}  /> 
        
        ))}
    </div>)

}

function IndividualProduct({product, addToCart}){
    const [quantity, setQuantity] = useState(1)

    function handleQuantityChange(e){
        setQuantity(parseInt(e.target.value));
    }
    
    function increaseQty(){
        setQuantity(quantity => quantity + 1)
    }
    function decreaseQty(){
        setQuantity(quantity => quantity - 1)

    }
    return(
    <div key={product.id} className="shadow-md  flex  justify-between flex-col bg-white  px-2 py-4 gap-1" >
    
        <img className="w-full h-50 object-contain" src={product.image} alt="" />
        
    

    
    <div className="flex flex-col gap-2 items-center" >
        <p className="font-extralight text-sm">{product.category}</p>
        <h2 className="font-bold text-center ">{product.title}</h2>
        <label htmlFor="ammount" className="text-center text-blue-700 font-bold text-xl">${product.price}</label>
        <div className="updateAmmount text-center" >
            <button className="cursor-pointer  rounded-2xl font-bold px-3 py-2 bg-gray-300 text-black " 
            onClick={()=>decreaseQty()}>&#45;</button>

            <input id={product.id} type="number" min="1" max="99"
             
             input="numeric"

                className="text-center overflow-hidden text-xl font-bold"
             defaultValue="1"
             onChange={e => handleQuantityChange(e)}
             value={quantity}
            />
            
            <button onClick={()=>increaseQty()}
            className="cursor-pointer rounded-2xl font-bold px-3 py-2 bg-gray-300 text-black " >&#43;</button>


        </div>
        <button className="cursor-pointer sm:w-11/12 w-10/12 py-1 text-lg font-bold border-2 rounded-xl  bg-blue-500 text-white" 
        id={product.id}  onClick={()=> addToCart(product.id,quantity)}>Add to cart</button>
    </div>

</div>
    )
}