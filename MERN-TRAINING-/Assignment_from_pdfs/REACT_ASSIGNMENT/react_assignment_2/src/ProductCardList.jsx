import React, { useState, useEffect, createContext } from 'react';
import ProductCard from './ProductCard';

export const ProductContext = createContext(); 

const ProductCardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px"}}>
      {
        products.map((product) => (
          <ProductContext.Provider key={product.id} value={product}>
            <ProductCard />
          </ProductContext.Provider>
        ))
      }
    </div>
  );
}

export default ProductCardList;
