import React from 'react';
import { useSelector } from 'react-redux';

function ProductCard() {
  const products = useSelector(state => state);
  console.log(products);

  return (
    <div className="ProductCard">
      <h1>Product Card</h1>
    </div>
  );
}

export default ProductCard;
