import React, { useState } from "react";
import "../Form/Form.css";

const Form = (props) => {
  let [inputText, setInputText] = useState("");
  let [empty, setEmpty] = useState(false); //setEmptyMessage makes more sense
  let obj;

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const createObj = () => {
    if (inputText === "") {
      return setEmpty(true);
    }

    obj = {
      text: inputText,
      id: Math.random() * 1000,
    };
    props.addTodo(obj);
    
    setInputText('')
    setEmpty(false);
  };

  return (
    <div>
      <div>
        <input
          className="input-todo"
          type="text"
          onChange={inputHandler}
          value={inputText}
        ></input>
        <button className="submit-btn" onClick={createObj}>
          Submit
        </button>
      </div>
      {empty ? <h4 className="error-msg">Error: Input cannot be blank</h4> : ""}
    </div>
  );
};

export default Form;
