"use client";
import React, { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <main className="min-h-screen flex flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-200">Counter</h1>
      <p className="text-2xl text-gray-300">{count}</p>
      <div className="flex gap-4">
        <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Increment
        </button>
        <button onClick={decrement} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Decrement
        </button>
      </div>
    </main>
  );
};

export default CounterPage;
