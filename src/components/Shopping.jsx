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
    <div className="productsGrid">



    {products.map(product=>(
       <IndividualProduct product={product} addToCart={updateCart}  /> 
        
        ))}
    </div>)

}

function IndividualProduct({product, addToCart}){
    const [quantity, setQuantity] = useState(0)

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }
    return(
    <div key={product.id} className="product" >
    
    <h2 className="title">{product.title}</h2>
    <img className="productImages" src={product.image} alt="" />Image

    <p className="category">Category: {product.category}</p>
    <label htmlFor="ammount">Amount : ${product.price}</label>
    <input id={product.id} type="number" min="1" max="99"
     onChange={handleQuantityChange}

     defaultValue="1"
    />
    <button id={product.id}  onClick={()=> addToCart(product.id,quantity)}>Add to cart</button>

</div>
    )
}