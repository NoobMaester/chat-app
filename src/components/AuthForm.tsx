"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login, register } from "@/lib/auth";
import { loginWithGoogle } from "@/lib/auth";
import Image from "next/image";

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
    } catch (err: Error | unknown) {
      const error = err instanceof Error ? err.message : "An error occurred. Please try again.";
      setError(error);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    try {
      await loginWithGoogle();
      router.push("/chat"); // Redirect to chat page after successful Signin
    } catch (err: Error | unknown) {
      const error = err instanceof Error ? err.message : "An error occurred. Please try again.";
      setError(error);
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
        className="w-full bg-[#7b3cd3] text-white py-2 rounded-lg hover:bg-[#7b3cd3] cursor-pointer my-4"
      >
        {type === "login" ? "Login" : "Register"}
      </button>

      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-2 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
      >
        <Image src="/google-color.svg" alt="Google" className="w-5 h-5" />
        Continue with Google
      </button>
    </form>
  );
}
