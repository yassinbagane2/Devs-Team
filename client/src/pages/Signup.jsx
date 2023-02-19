import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import logo from "../assets/logo2.png";
const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      repeatedPassword: "",
    },

    validationSchema: yup.object({
      fullname: yup
        .string()
        .min(8, "full name must be longer than 8 characters")
        .required("this field is required"),
      email: yup
        .string()
        .email("Please enter a valid email address.")
        .required("this filed is required"),
      password: yup.string().required("this filed is required"),
      repeatedPassword: yup
        .string()
        .equals([yup.ref("password"), null], "Password does not match.")
        .required("This field is required."),
    }),

    onSubmit: (values, { resetForm }) => {
      axios
        .post("http://localhost:5000/api/auth/register", formik.values)
        .then((result) => {
          setMessage("Account created you'll be redirected to login page!");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
          resetForm();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <div className="flex items-center flex-col bg-gradient-to-r from-[#41295a] to-[#2F0743] justify-center min-h-screen">
      <div className="bg-white rounded-md shadow-sm w-[400px] py-4 px-4">
        <div className="flex flex-col items-center">
          <img className="w-10 h-10" src={logo} alt="logo" />
          <h1 className="font-medium text-2xl">Digimind</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="fullname" className="text-sm">
              Fullname
            </label>
            <input
              type="text"
              placeholder="Jhon doe"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="fullname"
              className={
                formik.errors.fullname && formik.touched.fullname
                  ? "relative block border border-red-500 placeholder-gray-500 text-gray-900 rounded-md px-3 py-3 w-full my-2 "
                  : "relative block border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-md px-3 py-3 w-full my-2 "
              }
              value={formik.values.fullname}
            />
            {formik.errors.fullname && formik.touched.fullname ? (
              <p className="text-sm text-red-500">{formik.errors.fullname}</p>
            ) : (
              ""
            )}
          </div>
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
              required
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
          <div>
            <label htmlFor="email" className="text-sm">
              Repeat Password
            </label>
            <input
              type="password"
              className={
                formik.errors.repeatedPassword &&
                formik.touched.repeatedPassword
                  ? "relative block border border-red-500 placeholder-gray-500 text-gray-900 rounded-md px-3 py-3 w-full my-2 "
                  : "relative block border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-md px-3 py-3 w-full my-2 "
              }
              required
              name="repeatedPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.repeatedPassword}
            />
            {formik.errors.repeatedPassword &&
            formik.touched.repeatedPassword ? (
              <p className="text-sm text-red-500">
                {formik.errors.repeatedPassword}
              </p>
            ) : (
              ""
            )}
          </div>
          {message ? (
            <p className="bg-green-300 text-white rounded-md py-2 px-3 text-sm">
              {message}
            </p>
          ) : (
            ""
          )}
          <Button className="w-full" type="submit">
            Sign up
          </Button>
          <div className="flex items-center gap-1">
            Already have an account ?
            <span>
              <Link to="/login" className="text-indigo-700 font-bold ">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
