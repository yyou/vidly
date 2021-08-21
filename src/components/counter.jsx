import React, { Component } from "react";

const Counter = (props) => {
  const { children, onIncrement, onDelete } = props;

  return (
    <div>
      {children}
      <span className="badge badge-primary m-2">{props.counter.value}</span>
      <button
        onClick={() => onIncrement(props.counter)}
        className="btn btn-primary m-2"
      >
        Increment
      </button>
      <button
        onClick={() => onDelete(props.counter.id)}
        className="btn btn-danger m-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
