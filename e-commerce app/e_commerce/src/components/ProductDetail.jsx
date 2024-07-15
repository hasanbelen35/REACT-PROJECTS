import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../componentsCSS/ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../redux/ProductSlice";
import { Container } from "reactstrap";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import "../componentsCSS/ProductDetail.css";
import { addToBasket } from "../redux/basketSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  console.log(selectedProduct);
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    const product = products.find((product) => product.id === parseInt(id));
    if (product) {
      dispatch(setSelectedProduct(product));
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    const payload = {
      id: selectedProduct.id,
      price: selectedProduct.price,
      image: selectedProduct.image,
      title: selectedProduct.title,
      count:count
    };
    dispatch(addToBasket(payload))
  };

  return (
    <div style={{ paddingTop: "150px" }}>
      <Container className="detail-container">
        {selectedProduct && (
          <>
            <img className="detail-img" src={selectedProduct.image} alt="" />
            <div>
              <h4>{selectedProduct.title}</h4> <br />
              <p>{selectedProduct.description}</p>
              <h1>{`${selectedProduct.price} USD`}</h1>
              <div className="count-box">
                <CiCircleMinus
                  onClick={decreaseCount}
                  style={{ fontSize: "50px" }}
                />
                <h4>{count}</h4>
                <CiCirclePlus
                  onClick={increaseCount}
                  style={{ fontSize: "50px" }}
                />
              </div>
              <button onClick={addToCart} className="detail-btn">
                Add To Cart
              </button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
