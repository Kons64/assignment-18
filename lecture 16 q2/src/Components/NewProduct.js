import React, { useState } from "react";
const NewProduct = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const productData = {
      id: null,
      productName: enteredName,
      productCategory: enteredCategory,
      productPrice: enteredPrice,
    };

    props.onAddProduct(productData);
    setEnteredName("");
    setEnteredCategory("");
    setEnteredPrice("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Product Name</label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
      </div>
      <div>
        <label>Product Category</label>
        <input
          type="text"
          value={enteredCategory}
          onChange={categoryChangeHandler}
        />
      </div>
      <div>
        <label>Product Price</label>
        <input value={enteredPrice} onChange={priceChangeHandler} />
      </div>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewProduct;
