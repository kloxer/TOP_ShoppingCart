import { useEffect, useState } from "react"

import "./Shopping.css"

export default function ShoppingView({updateCart}){
    const [products, setProducts] = useState();
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

    if (loading){
        return (<h2>Loading...</h2>)
    }
    return(<>
        <ProductCardGrid products={products} updateCart={updateCart}/>

        </>)
}

function ProductCardGrid({products ,updateCart}){

    // function addToCart(id,quantity){
    //     console.log(id)
    //     console.log(quantity);


    // }

    
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
    <label htmlFor="ammount">Amount</label>
    <input id={product.id} type="number" minLength="1" maxLength="99" required onChange={handleQuantityChange}/>
    <button id={product.id}  onClick={()=> addToCart(product.id,quantity)}>Add to cart</button>

</div>
    )
}