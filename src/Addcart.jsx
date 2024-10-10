import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AddCart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = () => {
      // Retrieve cart from session storage
      const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      if (cart.length === 0) {
        setLoading(false);
        return;
      }
      setCartItems(cart); // Update the state with existing items
      setLoading(false);
    };

    fetchCartItems(); // Call the function to fetch cart items on component mount
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart)); // Update session storage
  };

  const clearCart = () => {
    sessionStorage.removeItem("cart");
    setCartItems([]); // Clear the state
  };

  if (loading) {
    return <p>Loading your cart...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className="container my-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item">
                <div className="row justify-content-evenly">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                      style={{ maxHeight: "150px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                    <p className="text-success">Price: {item.price}</p>
                    <div className="row">
                      <div className="col-6">
                        <button
                          className="btn btn-danger mt-3"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove From Cart
                        </button>
                      </div>
                      <div className="col-6">
                        <Link
                          to={"/buynow"}
                          state={{ product: item }}
                          className="btn btn-secondary border mt-3"
                        >
                          Place Order
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button className="btn btn-warning mt-3" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default AddCart;
