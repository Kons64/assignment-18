import React from "react";

const IndividualProduct = (props) => {
  const deleteProductHandler = () => {
    props.onDelete(props);
  };
  return (
    <tr>
      <td>{props.productName}</td>
      <td>{props.productCategory}</td>
      <td>{props.productPrice}</td>
      <td>
        <button onClick={deleteProductHandler}>Delete</button>
      </td>
    </tr>
  );
};

export default IndividualProduct;
