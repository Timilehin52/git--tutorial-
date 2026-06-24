import React from "react";
import { useState } from "react";

const SimpleState = () => {
  const [number, setNumber] = useState(0);
  const [user, loginUser] = useState(" ");
  const userName = () => {
    loginUser("Timi");
  };
  const username1 = () => {
    loginUser(" ");
  };
  const username2 = () => {
    loginUser("Kenshi");
  };
  const [btnStyle, setBtnStyle] = useState("bg-green-500");
  const handleNumberIncrease = (e) => {
    e.preventDefault();
    setNumber(number + 1);
    setBtnStyle("bg-red-800");
  };

  const decreaseNumber = (e) => {
    e.preventDefault();
    setNumber(number - 1);

    if (number === 0) {
      setNumber(number);
    }
  };

  return (
    <div className="flex flex-col items-center my-[10%]">
      <h1 className="text-3x1 font-extrabold">USESTATE</h1>

      <h1>{number}</h1>
      <button
        onClick={handleNumberIncrease}
        className={`${btnStyle} border rounded-md px-3 py-2 w-xs`}
      >
        Increase Number
      </button>

      <button
        onClick={decreaseNumber}
        className={`border rounded-md px-3 py-2 bg-teal-400 w-xs mt-3`}
      >
        Decrease Number
      </button>

      <h1 className="text-3x1 font-extrabold mt-3">LOGIN</h1>
      <h1>{user}</h1>
      <button
        onClick={userName}
        className={`border rounded-md px-3 py-2 bg-teal-400 w-xs mt-3`}
      >
        Login
      </button>

      <button
        onClick={username1}
        className={`border rounded-md px-3 py-2 bg-teal-400 w-xs mt-3`}
      >
        Logout
      </button>

      <button
        onClick={username2}
        className={`border rounded-md px-3 py-2 bg-teal-400 w-xs mt-3`}
      >
        Sign in
      </button>
    </div>
  );
};

export default SimpleState;
