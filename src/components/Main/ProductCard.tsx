import React from 'react';
import { useSelector } from '../../redux/selector';
const ProductCard = () => {
  const products = useSelector(state => state.products.products);
  const searchValue = useSelector(state => state.products.searchValue);
  console.log(
    '🚀 ~ file: ProductCard.tsx ~ line 6 ~ ProductCard ~ searchValue',
    searchValue,
  );

  return (
    <div className="ProductCard">
      <h1>{`Você pesquisou por ${searchValue}`}</h1>
    </div>
  );
};

export default ProductCard;
