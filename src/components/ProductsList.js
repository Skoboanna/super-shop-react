import React from "react";
import productsJSON from "../products.json";
import Product from "./Product";

const products = productsJSON;

function filterProductsByCategory(listOfProducts, category) {
  const filteredList = listOfProducts.filter(
    product => product.category === category && product.featured
  );
  return filteredList;
}

function filterProductsByManufacture(listOfProducts, manufacture) {
  const filteredList = listOfProducts.filter(
    product => product.manufacture === manufacture
  );
  return filteredList;
}

function filterProductsByValue(listOfProducts, value) {
  const filteredList = listOfProducts.filter(product =>
    product.name.toLowerCase().includes(value)
  );
  return filteredList;
}

function createListOfProductComponents(filteredProductList) {
  return filteredProductList.map(singleProduct => (
    <Product
      name={singleProduct.name}
      image={singleProduct.image}
      manufacture={singleProduct.manufacture}
      amount={singleProduct.amount}
    />
  ));
}

function Products(props) {
  let listOfProducts;

  if (props.category) {
    listOfProducts = filterProductsByCategory(products, props.category);
  } else if (props.manufacture) {
    listOfProducts = filterProductsByManufacture(products, props.manufacture);
    listOfProducts = filterProductsByValue(listOfProducts, props.input);
  } else {
    listOfProducts = filterProductsByValue(products, props.input);
  }

  const productsComponentList = createListOfProductComponents(listOfProducts);
  return <div className="products">{productsComponentList}</div>;
}

export default Products;
