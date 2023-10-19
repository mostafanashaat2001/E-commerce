import { Link } from "react-router-dom";

function Product(props){
    const {product} = props
    return(
        <>
            <div className="card" >
                <img src={product.image} className="text-center" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-price position-absolute"> Price: {product.price} EGP</p>
                    <Link className="btn btn-primary position-absolute" to={`/product/${product.id}`}>Details</Link>
                </div>
            </div>
        </>
    )
}
export default Product;