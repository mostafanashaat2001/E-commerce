import logo from "./Images/logo.jpg";
import "../components.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const fixToggler = () => {
    const showModel = document.querySelector("#navbarSupportedContent");
    showModel.classList.remove("show");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed w-100">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="..." />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={() => {
                    fixToggler();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={() => {
                    fixToggler();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact-us"
                  onClick={() => {
                    fixToggler();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link position-relative"
                  to="/cart"
                  onClick={() => {
                    fixToggler();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <div className="cart-icon">
                    <i>
                      <FontAwesomeIcon icon={faCartShopping} />
                    </i>
                    {cart.length !== 0 ? (
                      <span className="position-absolute">{cart.length}</span>
                    ) : null}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
