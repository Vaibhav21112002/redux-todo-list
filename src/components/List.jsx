import React from "react";
import { useDispatch } from "react-redux";
import {deleteTodo} from "../actions/todo"
const List = ({ todo }) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteTodo(todo));
    }
  return (
    <div className="my-3 d-grid">
      <button className="btn btn-warning" full-width={true}>
        <div className="d-flex justify-content-between">
          {todo}
          <button className="btn btn-primary" onClick = {handleDelete}>Delete</button>
        </div>
      </button>
    </div>
  );
};

export default List;
