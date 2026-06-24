import React, { useEffect, useRef } from "react";

export default function Simpleref() {
  const inputContainer = useRef(null);
  console.log();
  const subscribeLabel = useRef(null);

  useEffect(() => {
    inputContainer.current.focus();
    subscribeLabel.current.style.color = "red";
  });
  return (
    <div>
      <form
        className="w-[300px] bg-gray-200 mx-auto my-5 p-3 rounded-md"
        action=""
      >
        <label ref={subscribeLabel} className="block text-md" htmlFor="">
          Subscribe to our newsletter
        </label>
        <input
          placeholder="Enter your email"
          className="border block w-full py-2
      px-3 my-3"
          type="email"
        />

        <input
          ref={inputContainer}
          placeholder="Enter your email"
          className="border block w-full py-2
      px-3 my-3"
          type="text"
        />

        <button className="w-20 bg-blue-800 text-white my-3">Subscribe</button>
      </form>
    </div>
  );
}
