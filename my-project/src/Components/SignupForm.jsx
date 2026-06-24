import React, { useState } from "react";

export default function SignupForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const formValidation = () => {
    const { username, email, password, confirmPassword, acceptTerms } = user;
    const newErrors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValidation()) return;

    alert(
      `Form Submitted Successfully! Username: ${user.username} Email: ${
        user.email
      }Password: ${"*".repeat(user.password.length)}`
    );

    setErrors({});
    setUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    });
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "block w-full border py-2 px-3 rounded-md transition-all";

    if (errors[fieldName]) {
      return `${baseClass} border-red-500 focus:border-red-500 focus:outline-none`;
    }

    if (user[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-500 focus:border-green-500 focus:outline-none`;
    }

    return `${baseClass} border-gray-300 focus:border-blue-500 focus:outline-none`;
  };

  const isFormValid = () => {
    const { username, email, password, confirmPassword, acceptTerms } = user;
    return (
      username.length >= 3 &&
      /^\S+@\S+\.\S+$/.test(email) &&
      password.length >= 6 &&
      confirmPassword === password &&
      acceptTerms
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Create Account
        </h1>
        <p className="text-gray-600 text-center mb-6">Sign up to get started</p>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              onChange={handleChange}
              name="username"
              value={user.username}
              type="text"
              placeholder="Enter your username"
              className={getInputClassName("username")}
            />
            {errors.username && (
              <p className="font-semibold text-red-500 text-sm mt-1">
                {errors.username}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={user.email}
              type="email"
              placeholder="Enter your email"
              className={getInputClassName("email")}
            />
            {errors.email && (
              <p className="font-semibold text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              name="password"
              value={user.password}
              type="password"
              placeholder="Enter your password"
              className={getInputClassName("password")}
            />
            {errors.password && (
              <p className="font-semibold text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              onChange={handleChange}
              name="confirmPassword"
              value={user.confirmPassword}
              type="password"
              placeholder="Confirm your password"
              className={getInputClassName("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="font-semibold text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={user.acceptTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-700">
                I accept the Terms & Conditions and Privacy Policy
              </p>
            </label>
            {errors.acceptTerms && (
              <p className="font-semibold text-red-500 text-sm mt-1 ml-7">
                {errors.acceptTerms}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all mt-2 ${
              isFormValid()
                ? "bg-blue-600 hover:bg-blue-700 cursor-pointer shadow-lg hover:shadow-xl"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {isFormValid() ? "Sign Up" : "Complete All Fields"}
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account? <b>LOGIN</b>
        </p>
      </div>
    </div>
  );
}
