"use client";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useRouter } from "next/navigation";// Import useRouter
import headerlogo from "../../public/headelogo.png";
import headertextimg from "../../public/headerlogo2.png";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter(); // Move useRouter inside the co
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown((prev) => !prev);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      phone: Yup.string()
        .required("Telefon raqami majburiy")
        .matches(/^\+998\d{9}$/, "Telefon raqami noto‘g‘ri formatda. (+998 XX XXX XX X)")
        .test("valid-phone", "Telefon raqam noto‘g‘ri", (value) => {
          return value ? /^\+998\d{9}$/.test(value.trim()) : false;
        }),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      try {
        const requestBody = {
          first_name: values.firstName,
          last_name: values.lastName,
          phone_number: values.phone,
          email: values.email,
          password: values.password,
        };
    
        const response = await fetch("https://texnoark.ilyosbekdev.uz/auth/user/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log("Success:", data);
          alert("Registration successful!");
          router.push("/login"); 
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData);
          alert(`Registration failed: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Network Error:", error);
        alert("Something went wrong. Please try again later.");
      }
    },
    
  });
  
  return (
    <section className="absolute inset-0 w-full h-full grid text-center items-center p-8 bg-gray-50">
      <div>
        <div className="flex justify-center mx-auto max-w-[24rem]">
          <div className="w-full flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image src={headerlogo} alt="headerlogo" />
              <Image src={headertextimg} alt="headerlogo" />
            </div>
            <h1 className="text-[25px] font-bold text-gray-800">Sign Up</h1>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="mx-auto max-w-[24rem] text-left">
          {/* First Name */}
          <div className="mb-5">
            <label className="mb-2 block text-gray-900 font-medium">First Name</label>
            <input
              type="text"
              placeholder="John"
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                formik.touched.firstName && formik.errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
            )}
          </div>
          {/* Last Name */}
          <div className="mb-5">
            <label className="mb-2 block text-gray-900 font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                formik.touched.lastName && formik.errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
            )}
          </div>
          {/* Phone */}
          <div className="mb-5">
            <label className="mb-2 block text-gray-900 font-medium">Phone Number</label>
            <input
              type="text"
              placeholder="+998335701001"
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>
          {/* Email */}
          <div className="mb-5">
            <label className="mb-2 block text-gray-900 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="name@mail.com"
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          {/* Password */}
          <div className="mb-5 relative">
            <label className="mb-2 block text-gray-900 font-medium">Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="********"
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...formik.getFieldProps("password")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-10 right-3 text-gray-500"
            >
              {passwordShown ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
            </button>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>
          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
          <p className="mt-6 text-center text-gray-600">
          
            <Link href="/login" className="text-blue-500 font-medium">
              LogIn
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
