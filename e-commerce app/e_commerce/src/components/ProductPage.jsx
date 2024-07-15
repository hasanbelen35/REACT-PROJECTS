import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/ProductPage.css';

export default function ProductPage({ product }) {
  const { id, image, category, price,title } = product;
  const navigate = useNavigate();
  
  return (
    <div id="productPage">
      <Card className="product_card" style={{ width: "18rem" }}>
        <img alt="Sample" src={image} className="image" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {id}
          </CardSubtitle>
          <CardText id="product_price">{`${price} USD`}</CardText>
          <Button onClick={() => navigate("/product-details/" + id)} color="primary">DETAIL</Button>
        </CardBody>
      </Card>
    </div>
  );
}
