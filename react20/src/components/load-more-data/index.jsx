import React, { useEffect, useState } from "react";
import "./styles.css";
const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();
      if (data && data.products && data.products.length) {
        setProducts(() => [...products, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  console.log(count);
  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading!! please wait!!</div>;
  }

  if (errorMsg !== null) {
    return <div>errorMsg</div>;
  }
  return (
    <div className="load-more-container">
      <div className="products">
        {products && products.length
          ? products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.thumbnail} alt="couldnot" />
                <h3>{product.title}</h3>
              </div>
            ))
          : null}
      </div>
      <div className="load-more-button">
        <button
          disabled={disable}
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disable ? <p>Limit of {products.length} products reached!!</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
