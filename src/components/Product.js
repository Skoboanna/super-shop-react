import React from "react";

function Product(props) {
  return (
    <div className="product">
      <img src={props.image}></img>
      <p className="price">${props.amount}</p>
      <h3>{props.name}</h3>
    </div>
  );
}

export default Product;
