import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost/php-redis-backend/get_products.php"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-5">Most Bought</h2>
        <div className="row">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="col-12 col-md-4 card-dress">
              <Link
                to={`/innerpage/${product.id}`}
                className="text-decoration-none"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-image"
                />
                <hr />
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">{product.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-5">Most Liked</h2>
        <div className="row">
          {products.slice(3, 6).map((product) => (
            <div key={product.id} className="col-12 col-md-4 card-dress">
              <Link
                to={`/innerpage/${product.id}`}
                className="text-decoration-none"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-image"
                />
                <hr />
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">{product.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-5">History</h2>
        <div className="row">
          {products.slice(6, 9).map((product) => (
            <div key={product.id} className="col-12 col-md-4 card-dress">
              <Link
                to={`/innerpage/${product.id}`}
                className="text-decoration-none"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-image"
                />
                <hr />
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">{product.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
