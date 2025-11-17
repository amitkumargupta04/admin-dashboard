import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const userEmail = email.trim();

    if (userEmail === "admin@company.com") {
      dispatch(login({ email: userEmail, role: "admin" }));
      navigate("/dashboard");
      return;
    }

    if (userEmail === "user@company.com") {
      dispatch(login({ email: userEmail, role: "user" }));
      navigate("/dashboard");
      return;
    }

    alert("Invalid credentials!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-sm border border-gray-300"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login
        </h1>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-left font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="admin@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-left font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
