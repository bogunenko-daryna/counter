import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  // const [imageUrl, setImageUrl] = useState("https://picsum.photos/200")
  const fotmCount = () => {
    return count === 0 ? "Ноль" : count;
  };
  const tags = ["tag1", "tag2", "tag3"];

  const getBaseclasses = () => {
    let classes = "badge m-20 btn-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };
  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };
  const handleDecrement = (productId) => {
    console.log(productId);
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      {renderTags()}
      <span className={getBaseclasses()}>{fotmCount()}</span>{" "}
      <button
        onClick={() => {
          handleIncrement({ id: 1 });
        }}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => {
          handleDecrement({ id: 1 });
        }}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
