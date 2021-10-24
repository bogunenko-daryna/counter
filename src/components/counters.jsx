import React from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, ...rest }) => {
  return (
    <div>
      {counters.map((counter) => (
        <Counter id={counter.id} {...counter} {...rest} />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Counters;
