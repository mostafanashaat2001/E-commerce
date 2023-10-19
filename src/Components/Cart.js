import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Clear, DeleteFromCart } from "../RTK/Slices/Cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((counter, product) => {
    counter += product.price * product.quantity;
    return counter;
  }, 0);

  return (
    <>
      <div className="cart container pt-5">
        <h1 className="p-5 my-cart">
          Cart{" "}
          <i>
            <FontAwesomeIcon icon={faCartShopping} />
          </i>
        </h1>
        <table className="table table-hover ">
          <thead>
            <tr>
              {/* <th scope="col">ID</th> */}
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              {/* <th scope="col">Quantity</th> */}
              <th scope="col">
                {cart.length !== 0 ? (
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      dispatch(Clear());
                    }}
                  >
                    Clear
                  </button>
                ) : null}
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                {/* <th scope="row">{product.id}</th> */}
                <td>{product.title}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "80px", height: "80px" }}
                  ></img>
                </td>
                <td>{product.price}$</td>
                {/* <td>{product.quantity}</td> */}
                <td>
                  <b>Quantity:</b> {product.quantity}
                  <br />
                  <br />
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(DeleteFromCart(product));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h5>Total Price: {totalPrice.toFixed(2)}$</h5>
        {cart.length !== 0 ? (
          <div className="buy-btn text-center">
            <button className="btn">Buy</button>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Cart;
