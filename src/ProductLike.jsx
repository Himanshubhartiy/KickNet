import React, { useState, useEffect } from "react";

function ProductLike({ productId, userId }) {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch(
          `http://localhost/php-redis-backend/get_likes.php?product_id=${productId}&user_id=${userId}`
        );
        const result = await response.json();
        setLikeCount(result.like_count);
        setHasLiked(result.has_liked);
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };

    fetchLikes();
  }, [productId, userId]);

  const handleLikeClick = async () => {
    try {
      const response = await fetch(
        "http://localhost/php-redis-backend/like_api.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product_id: productId, user_id: userId }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setLikeCount(result.like_count);
        setHasLiked(result.has_liked);
      }
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleLikeClick}
        className={`btn ${hasLiked ? "btn-success" : "btn-outline-success"}`}
      >
        {hasLiked ? "Liked" : "Like"} ({likeCount})
      </button>
    </div>
  );
}

export default ProductLike;
