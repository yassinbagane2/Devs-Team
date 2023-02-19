import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import logo from "../assets/logo2.png";

const Login = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      email: yup
        .string()
        .email("Please enter a valid email address.")
        .required("this filed is required"),
      password: yup.string().required("this filed is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      axios
        .post("http://localhost:5019/api/auth/login", formik.values)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
          resetForm();
        })
        .catch((err) => {
          setMessage("Please enter valid credentials!");
          console.log(err);
        });
    },
  });
  return (
    <div className="flex items-center flex-col bg-gradient-to-r from-[#41295a] to-[#2F0743] justify-center min-h-screen">
      <div className="bg-white rounded-md shadow-sm py-8 w-[400px] px-4">
        <div className="flex flex-col items-center">
          <img className="w-10 h-10" src={logo} alt="logo" />
          <h1 className="font-medium text-2xl">Digimind</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email" className="text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className={
                formik.errors.email && formik.touched.email
                  ? "relative block border border-red-500 placeholder-gray-500 text-gray-900 rounded-md px-3 py-3 w-full my-2 "
                  : "relative block border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-md px-3 py-3 w-full my-2 "
              }
              placeholder="user@exemple.com"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.errors.email && formik.touched.email ? (
              <p className="text-sm text-red-500">{formik.errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Password
            </label>
            <input
              type="password"
              className={
                formik.errors.password && formik.touched.password
                  ? "relative block border border-red-500 placeholder-gray-500 text-gray-900 rounded-md px-3 py-3 w-full my-2 "
                  : "relative block border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-md px-3 py-3 w-full my-2 "
              }
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="text-sm text-red-500">{formik.errors.password}</p>
            ) : (
              ""
            )}
          </div>
          {message ? (
            <p className="bg-red-500 text-sm rounded-md px-3 py-2 text-white">
              {message}
            </p>
          ) : (
            ""
          )}
          <Button className={"w-full"} type="submit">
            Login
          </Button>
          <div className="flex items-center mt-2 gap-1">
            Create an account ?
            <span>
              <Link to="/signup" className="text-indigo-700 font-bold ">
                Signup
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
