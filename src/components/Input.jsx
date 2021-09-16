import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo,clearTodo } from "../actions/todo";
const Input = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const clear = (e) => {
    e.preventDefault();
    dispatch(clearTodo());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };
  
  return (
    <div className="d-grid">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Task
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button className="btn btn-danger my-2" onClick={handleSubmit}>
        Add
          </button>
          <button className="btn btn-info my-2" onClick={clear}>
        Clear
      </button>
    </div>
  );
};

export default Input;
