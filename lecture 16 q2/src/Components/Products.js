import React from "react";
import IndividualProduct from "./IndividualProduct";
import "../Product.css";

const Products = (props) => {
  const deleteProductHandler = (product) => {
    props.onDelete(product);
  };
  return (
    <table className="products">
      <tbody>
        <tr>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Product Price</th>
          <th>Action</th>
        </tr>

        {props.initialProducts.map((product) => (
          <IndividualProduct
            key={product.id}
            productName={product.productName}
            productCategory={product.productCategory}
            productPrice={product.productPrice}
            onDelete={deleteProductHandler}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Products;
