import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function InnerPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize the navigate function
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost/php-redis-backend/get_product.php?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.message) {
          throw new Error(data.message);
        }
        setProduct(data);
        setLikes(data.likes || 0);
        setLiked(data.liked || false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const username = localStorage.getItem("username");
    if (!product) return;

    if (!username) {
      alert("You need to be logged in to add products to the cart.");
      return;
    }

    // Retrieve existing cart from session storage or initialize a new one
    const existingCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const productExists = existingCart.some((item) => item.id === product.id);

    if (productExists) {
      alert("This product is already in your cart.");
      return;
    }

    // Add the product to the cart and update session storage
    existingCart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Product added to cart successfully.");

    // Redirect to AddCart page
    navigate("/addcart"); // Redirect to AddCart page
  };

  const toggleLike = async () => {
    const username = localStorage.getItem("username");
    const action = liked ? "dislike" : "like";

    if (!username) {
      alert("You need to be logged in to like a product.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost/php-redis-backend/Like.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: product.id, action }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update like status");
      }

      const data = await response.json();
      setLikes(data.likes);
      setLiked(!liked);
    } catch (error) {
      console.error(error.message);
      alert("An error occurred while updating likes.");
    }
  };

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-warning" : "text-muted"}>
          ★
        </span>
      );
    }
    return stars;
  };

  if (loading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-danger">{error}</h2>;
  }

  if (!product) {
    return <h2 className="text-center">Product not found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-md-6 mb-4 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
            style={{ width: "80%", maxHeight: "450px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="display-5 fw-bold">{product.name}</h2>
          <div className="text-muted">
            {renderStars(product.rating)} {/* Display stars based on rating */}
            <span className="ms-2">Rating: {product.rating}</span>
          </div>
          <p className="lead">{product.description}</p>
          <h3 className="text-success">Price: {product.price}</h3>

          <div className="d-flex align-items-center mt-3">
            <button
              onClick={toggleLike}
              className={`btn ${liked ? "btn-danger" : "btn-outline-danger"}`}
            >
              {liked ? "Dislike" : "Like"}
            </button>
            <span className="ms-2">{likes} Likes</span>
          </div>

          <div className="row justify-content-evenly mt-4">
            <div className="col-6">
              <button
                onClick={addToCart}
                className="btn btn-secondary border mt-3"
              >
                Add To Cart
              </button>
            </div>
            <div className="col-6">
              <Link
                to={`/buynow`}
                state={{ product }}
                className="btn btn-secondary border mt-3"
              >
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnerPage;
