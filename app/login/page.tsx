"use client";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import headerlogo from '../../public/headelogo.png';
import headertextimg from '../../public/headerlogo2.png';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => setPasswordShown((prev) => !prev);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(""); // Clear status message

    try {
      const response = await fetch("https://texnoark.ilyosbekdev.uz/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone_number: phone, password }),
      });

      if (response.ok) {
        const data = await response.json();
        typeof window !== "undefined"?  localStorage.setItem("access_token", data?.data?.tokens?.access_token):"" // Save token
        typeof window !== "undefined"?   localStorage.setItem("user_id", data?.data?.data?.id):"" // Save id
        console.log(data.id);
        
        setStatusMessage("Sign-in successful!");
        
        // Redirect to dashboard or home
        setTimeout(() => {
          setStatusMessage(""); // Clear message
          router.push("/");
        }, 2000);
      } else {
        const errorData = await response.json();
        setStatusMessage(
          `Sign-in failed: ${errorData.message || "Unknown error"}`
        );
      }
    } catch  {
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="absolute inset-0 w-full h-full grid text-center items-center p-8 bg-gray-50">
      <div>
        <div className="flex justify-center mx-auto max-w-[24rem]">
          <div className="w-full flex items-center justify-between mb-4">
            <div className="flex items-center justify-center">
              <Image src={headerlogo} alt="headerlogo" />
              <Image src={headertextimg} alt="headerlogo" />
            </div>
            <h1 className="text-[25px] font-bold text-gray-800">Sign In</h1>
          </div>
        </div>

        <form className="mx-auto max-w-[24rem] text-left" onSubmit={handleSignIn}>
          {/* Status Message */}
          {statusMessage && (
            <div
              className={`mb-4 p-3 text-center rounded-lg ${
                statusMessage.startsWith("Sign-in successful")
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {statusMessage}
            </div>
          )}

          {/* Phone Number Input */}
          <div className="mb-6">
            <label
              htmlFor="number"
              className="mb-2 block text-gray-900 font-medium"
            >
              Phone Number
            </label>
            <input
              id="number"
              type="text"
              placeholder="+998335701001"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Password Input */}
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="mb-2 block text-gray-900 font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type={passwordShown ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-9 right-3 text-gray-500 mt-2"
            >
              {passwordShown ? (
                <AiFillEye size={20} />
              ) : (
                <AiFillEyeInvisible size={20} />
              )}
            </button>
          </div>
          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
          {/* Forgot Password */}
          <div className="flex justify-end mt-4">
            <a href="#" className="text-blue-500 text-sm font-medium">
              Forgot password?
            </a>
          </div>
          {/* Google Sign In */}
          <button
            type="button"
            className="mt-6 w-full p-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="Google"
              className="h-5 w-5"
            />
            Sign in with Google
          </button>
          {/* Create Account */}
          <p className="mt-6 text-center text-gray-600">
            Not registered?{" "}
            <Link href="/register" className="text-blue-500 font-medium">
              Create account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
