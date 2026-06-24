import React, { useState } from "react";

export default function ComplexState() {
  const [user, setUser] = useState({
    fullName: "John Doer",
    age: 45,
    job: "Fullstack Dev",
  });
  const handleChangeUser = () => {
    setUser({ fullName: "Adolf Hilter", age: 50, job: "Backend Dev" });
  };
  return (
    <div className="flex flex-col gap-1 items-center justify-center mx-auto">
      <h1>Full : {user.fullName}</h1>
      <p>Age : {user.age}</p>
      <p>Job : {user.job}</p>
      <button
        onClick={handleChangeUser}
        className="bg-blue-500 w-50 h-10 rounded-md text-white"
      >
        Change user
      </button>
    </div>
  );
}
