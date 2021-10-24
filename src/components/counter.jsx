import React from "react";

const Counter = ({ id, value, name, onIncrement, onDecrement, onDelete }) => {
  const fromValue = () => {
    return value === 0 ? "НОЛЬ" : value;
  };
  const getBadgeClasses = () => {
    let classes = "badge badge-lg m-1 col-md-2 bg-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <div className="nav">
      <h4 className="col-md-5">{name}</h4>
      <span className={getBadgeClasses()}>{fromValue()}</span>
      <button
        onClick={() => onIncrement(value, id)}
        className="btn btn-secondary btn-sm m-1"
      >
        +
      </button>
      <button
        onClick={() => onDecrement(value, id)}
        className="btn btn-secondary btn-sm m-1"
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-1"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
