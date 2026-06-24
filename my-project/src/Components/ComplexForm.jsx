import React, { useState } from "react";

export default function ComplexForm() {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    username: "",
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formValidation = () => {
    const { email, fullName, username } = user;
    const newErrors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!fullName.trim()) {
      newErrors.fullName = "Fullname is required";
    }
    if (!username.trim()) {
      newErrors.username = "username is required";
    }

    if (!email || !fullName || !username) {
      setError("Please fill all fields");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValidation()) return;
    setErrors({});
    setError("");
    setUser({ email: "", username: "", fullName: "" });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-md flex flex-col items-center shadow-lg mx-auto my-5 p-3"
      >
        <label htmlFor="email" className="">
          Email Address
        </label>
        {errors.email && (
          <p className="font-semibold text-red-800">{errors.email}</p>
        )}
        <input
          onChange={handleChange}
          name="email"
          value={user.email}
          type="email"
          className="block w-xs border py-1 px-2 rounded-md"
        />
        <label htmlFor="email" className="form-label">
          Name
        </label>
        {errors.fullName && (
          <p className="font-semibold text-red-800">{errors.fullName}</p>
        )}
        <input
          onChange={handleChange}
          value={user.fullName}
          name="fullName"
          type="text"
          className="block w-xs border py-1 px-2 rounded-md"
        />
        <label htmlFor="username" className="form-label">
          Username
        </label>
        {errors.username && (
          <p className="font-semibold text-red-800">{errors.username}</p>
        )}
        <input
          onChange={handleChange}
          value={user.username}
          name="username"
          type="text"
          className="block w-xs border py-1 px-2 rounded-md"
        />
        <button
          type="submit"
          className="w-[100px] bg-blue-900 rounded-md mt-2 border py-2 "
        >
          Register
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
