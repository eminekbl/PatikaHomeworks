import React from "react";
import "./Form.css";

const Form = ({ userInput, onInputChange, addItem }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addItem();
  };
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={onInputChange}
        className="form-control"
      />
      <button onClick={addItem} className="btn btn-ekle">
        Ekle
      </button>
    </form>
  );
};

export default Form;
