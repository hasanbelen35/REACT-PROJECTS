import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from "../redux/ProductSlice";
import ProductPage from '../components/ProductPage';

export default function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
console.log(products)
  useEffect(() => {
    dispatch(getAllProducts());
  },[dispatch]);

  

  return (
    <div style={{display:"flex"}} >
     {products && products.map((product) => (
        <ProductPage product= {product} key= {product.id} />
     ))}
    </div>
  );
}
