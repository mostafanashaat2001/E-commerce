import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../RTK/Slices/Cart-slice";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const apiUrl = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${apiUrl}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  },[]);
  return (
    <>
      <div className="product-details pt-5">
        <div className="container pt-5">
          <h1>Product Details</h1>
          <div className="row pt-5">
            <div className="content col-lg-6">
              <h2>{product.title}</h2>
              <p>
                <span>Description: </span>
                {product.description}
              </p>
              <p>
                <span>Category: </span>
                {product.category}
              </p>
              <p>
                <span>Price: </span>
                {product.price} EGP
              </p>
              <div>
                <button
                  className="d-none d-md-block"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="image col-lg-6">
              <img src={product.image} alt={product.title} />
            </div>
            <button
              className="d-block d-md-none"
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
