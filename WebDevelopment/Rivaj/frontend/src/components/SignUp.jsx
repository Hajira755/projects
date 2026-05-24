import React, { useState } from "react";

const SignUp = ({ isVisible, onClose }) => {
  const [activeForm, setActiveForm] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      try {
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("✅ Login successful:", data);
          localStorage.setItem("token", data.token); // ✅ Save token
          alert("Login successful");
          onClose(); // Close the modal or sidebar
        } else {
          alert(data.message || "Login failed");
        }
      } catch (error) {
        console.error("❌ Login error:", error);
        alert("Something went wrong. Try again.");
      }
    }
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Sending reset email to:", email);
      alert("Reset email sent (mock)");
    }
  };

  const renderLoginForm = () => (
    <>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="mb-4">
          <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Sign in</button>
      </form>
      <p
        className="text-sm text-blue-600 mt-2 hover:underline cursor-pointer"
        onClick={() => setActiveForm("reset")}
      >
        Forgot password?
      </p>
      <div className="mt-6 text-center text-sm">
        New customer?{" "}
        <span
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() => setActiveForm("create")}
        >
          Create account
        </span>
      </div>
    </>
  );

  const renderResetForm = () => (
    <>
      <h2 className="text-xl font-semibold mb-2">Reset your password</h2>
      <p className="text-sm mb-4">We will send you an email to reset your password.</p>
      <form onSubmit={handleResetSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-1"
        />
        {emailError && <p className="text-red-600 text-sm mb-2">{emailError}</p>}
        <button className="w-full bg-pink-800 text-white py-2 rounded hover:bg-pink-900 mb-2">Submit</button>
      </form>
      <button
        className="text-sm text-center underline text-gray-600 w-full"
        onClick={() => {
          setEmail("");
          setEmailError("");
          setActiveForm("login");
        }}
      >
        Cancel
      </button>
    </>
  );

  const renderCreateForm = () => (
    <>
      <h2 className="text-xl font-semibold mb-4 text-center">Create Account</h2>
      <input type="text" placeholder="First Name" className="w-full border p-2 rounded mb-2" />
      <input type="text" placeholder="Last Name" className="w-full border p-2 rounded mb-2" />
      <input type="email" placeholder="Email" className="w-full border p-2 rounded mb-2" />
      <input type="password" placeholder="Password" className="w-full border p-2 rounded mb-4" />
      <button className="w-full bg-pink-800 text-white py-2 rounded hover:bg-pink-900 mb-2">Create</button>
      <button
        className="text-sm text-center underline text-gray-600 w-full"
        onClick={() => setActiveForm("login")}
      >
        Cancel
      </button>
    </>
  );

  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 transition-transform duration-300 transform ${isVisible ? "translate-x-0" : "translate-x-full"} z-50`}>
      <button onClick={onClose} className="text-gray-500 absolute top-4 right-4 text-xl">&times;</button>
      {activeForm === "login" && renderLoginForm()}
      {activeForm === "reset" && renderResetForm()}
      {activeForm === "create" && renderCreateForm()}
    </div>
  );
};

export default SignUp;
