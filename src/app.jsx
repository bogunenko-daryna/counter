import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Чашка" },
    { value: 1, id: 5, name: "Чай" },
    { value: 0, id: 6, name: "Блюдце" },
    { value: 0, id: 7, name: "Стартовый набор минималиста" },
    { value: 0, id: 8, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };
  const handleIncrement = (currentValue, currentId) => {
    const newCounters = counters.map((c) => {
      c.id === currentId ? (c.value = currentValue + 1) : (c.value = c.value);
      return c;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (currentValue, currentId) => {
    const newCounters = counters.map((c) => {
      c.id === currentId && c.value > 0
        ? (c.value = currentValue - 1)
        : (c.value = c.value);
      return c;
    });
    setCounters(newCounters);
  };

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
