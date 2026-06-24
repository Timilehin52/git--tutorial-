import React, { useState } from "react";

export default function SimpleForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, username, fullname, agree);

    if (!email || !username || !fullname || !agree) {
      setError("please input all fields");
      return;
    }

    setEmail("");
    setUsername("");
    setFullname("");
    setAgree(false);
    setError("");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-md mx-auto my-[5%] shadow-lg py-3 px-4"
        action=""
      >
        <h1 className="pb-5">Register with us</h1>

        <label htmlFor="email">Email Adress</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="block border rounded-md my-2 w-full px-3 py-1"
          id="email"
          placeholder="Input your mail"
          type="email"
        />

        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="block border rounded-md my-2 w-full px-3 py-1"
          id="username"
          placeholder="Input your username"
          type="text"
        />

        <label htmlFor="Fullname">Fullname</label>
        <input
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          className="block border rounded-md my-2 w-full px-3 py-1"
          id="Fullname"
          placeholder="Enter your first name, middlename & lastname"
          type="text"
        />

        <input
          onChange={(e) => setAgree(e.target.checked)}
          checked={agree}
          id="agree"
          type="checkbox"
        />
        <label className="ml-2" htmlFor="agree">
          Agree to terms and conditions
        </label>

        <button
          className="block border w-full my-2 py-2 px-3 rounded-md bg-blue-500 
         hover:big-blue-900 hover:text-white"
          type="submit"
        >
          Register
        </button>

        <p>{error}</p>
      </form>
    </div>
  );
}
