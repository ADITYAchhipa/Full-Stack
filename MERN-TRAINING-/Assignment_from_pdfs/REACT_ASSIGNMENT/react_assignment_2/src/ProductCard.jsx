import React, { useContext } from 'react';
import { ProductContext } from './ProductCardList';

const ProductCard = () => {
  const product = useContext(ProductContext);

  return (
    <div style={{backgroundColor : "lightGrey", boxShadow : "5px black", minWidth: "220px"}}>
      <div>
        <img style={{maxHeight: "250px", maxWidth: "250px", margin: "auto"}} src={product.image} alt={product.title} />
      </div>
      <div>
        <p>{product.title}</p>
        <p>Price: {product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
