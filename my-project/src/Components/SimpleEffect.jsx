import React, { useEffect, useState } from "react";

export default function SimpleEffect() {
  const [number, setNUmber] = useState(1);
  const [age, setAge] = useState(20);
  const [count, setCount] = useState(0);

  const handleNumberIncrease = (e) => {
    e.preventDefault();
    setNUmber(number + 1);
  };
  const decreaseAge = (e) => {
    e.preventDefault();
    setAge(age - 1);
  };

  useEffect(() => {
    console.log("UseEffect ran");
  });

  useEffect(() => {
    setTimeout(() => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    }, 1000);
  }, [count]);
  return (
    <div className="mx-auto flex flex-col w-[200px]">
      <h1>Number : {number}</h1>
      <button
        onClick={handleNumberIncrease}
        className="border w-[100px] bg-yellow-900 rounded-md my-2 text-white"
      >
        Increase
      </button>
      <h1>Age : {age}</h1>
      <button
        onclick={decreaseAge}
        className="border w-[100px]
       bg-yellow-900 rounded-md my-2 text-white"
      >
        Decrease
      </button>

      <p>Count : {count}</p>
    </div>
  );
}
