import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <ProductContext.Provider value={{ products, setProducts, loading, setLoading }}>
      {children}
    </ProductContext.Provider>
  );
};
