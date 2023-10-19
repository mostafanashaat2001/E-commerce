import { useEffect } from "react";
import Product from "./Product";
import { useState } from "react";

function ProductsList(){
    const apiUrl = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const getProducts = () => {
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
    const getCategories = () => {
        fetch(`${apiUrl}/categories`)
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }
    const getProductInCategory = (category) => {
        fetch(`${apiUrl}/category/${category}`)
        .then((res)=> res.json())
        .then((data)=>setProducts(data));
    }
    useEffect(() => {
        getProducts();
        getCategories();
    }, [])
    return(
        <>
            <h2 className="our-products text-center p-5 position-relative">Our Products</h2>
            <div className="container">
            <div className="category">
                <button className="btn" onClick={()=>{getProducts()}}>All</button>
                {
                    categories.map((categories)=>{
                        return(
                            <button key={categories} className="btn" onClick={()=>{getProductInCategory(categories)}}> {categories} </button>
                        )
                    })
                }
            </div>
            <div className="row">
                {products.map((product)=> {
                    return(
                        <div className="col-lg-3 col-md-6 p-2" key={product.id}>
                            <Product product = {product} />
                        </div>
                    )
                })}
            </div>
            </div>
        </>
    )
}
export default ProductsList;