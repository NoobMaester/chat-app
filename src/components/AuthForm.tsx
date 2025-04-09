"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login, register } from "@/lib/auth";

type AuthFormProps = {
  type: "login" | "register";
};

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (type === "login") {
        await login(email, password);
      } else {
        await register(email, password);
      }
      router.push("/chat"); // Redirect to chat page after successful login/register
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#7b3cd3] text-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#7b3cd3] text-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#7b3cd3] text-white py-2 rounded-lg hover:bg-[#7b3cd3] cursor-pointer"
      >
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
