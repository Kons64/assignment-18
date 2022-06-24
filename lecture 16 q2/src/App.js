import React, { useState } from "react";
import Products from "./Components/Products";
import NewProduct from "./Components/NewProduct";

let initialProducts = [
  {
    id: "0",
    productName: "M&M",
    productCategory: "Snacks",
    productPrice: "$1.99",
  },
  {
    id: "1",
    productName: "Table",
    productCategory: "Furniture",
    productPrice: "$199",
  },
  {
    id: "2",
    productName: "Kale",
    productCategory: "Vegitables",
    productPrice: "$2.49",
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const deleteProductHandler = (product) => {
    setProducts((prevProducts) => {
      return prevProducts.filter(
        (element) => element.productName !== product.productName
      );
    });
  };

  const addProductHandler = (product) => {
    product.id = initialProducts.length.toString();
    setProducts((prevProducts) => {
      return [...prevProducts, product];
    });
  };
  return (
    <div>
      <Products onDelete={deleteProductHandler} initialProducts={products} />
      <NewProduct onAddProduct={addProductHandler} />
    </div>
  );
}

export default App;
