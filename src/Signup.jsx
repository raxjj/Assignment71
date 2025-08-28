import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "./Input";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export default function Signup() {
  const signupSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: signupSchema,
  });

  function callLoginApi(values) {
    console.log("api called", values.email, values.password);
  }

  return (
    <div className="bg-gray-300">
      <button className="px-10 text-2xl py-5">
        <Link to="/">
          <AiOutlineHome />
        </Link>
      </button>
      <div className="flex justify-center bg-gray-300 h-screen items-center">
        <div className="bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-400 rounded-lg py-10 px-20">
          <h1 className="text-white font-bold justify-center text-center mb-5 text-2xl">
            Create new account
          </h1>
          <div>
            <form onSubmit={handleSubmit}>
              <Input
                values={values.name}
                error={errors.name}
                touched={touched.name}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Full Name"
                name="name"
                id="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Full Name"
                className="w-[300px]"
              />
         <br />
              <Input
                values={values.email}
                error={errors.email}
                touched={touched.email}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Email"
                name="email"
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email"
                className="w-[300px]"
              />
              <br />
              <Input
                values={values.password}
                error={errors.password}
                touched={touched.password}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Password"
                name="password"
                id="password"
                type="password"
                required
                autoComplete="password"
                placeholder="Password"
                className="w-[300px]"
              />
              <br />
              {touched.email && errors.email && (
                <div className="text-red-300">{errors.email}</div>
              )}
              <label htmlFor="password"></label>
              <Input
                values={values.password}
                error={errors.password}
                touched={touched.password}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Password"
                name="password"
                id="password"
                type="password"
                required
                autoComplete="password"
                placeholder="Password"
                className="w-[300px]"
              />
              <br />
              {touched.email && errors.email && (
                <div className="text-red-300">{errors.email}</div>
              )}
              <div className="flex justify-end">
                <button className="text-white hover:underline">
                  <Link to="/forget">Forget Password?</Link>
                </button>
              </div>
              <br />
              <div className="flex justify-center items-center mt-1">
                <button
                  type="submit"
                  disabled={!isValid}
                  className="text-center bg-gradient-to-r disabled:from-purple-200 from-purple-500 disabled:via-blue-200 via-blue-500 disabled:to-indigo-200 to-indigo-500 hover:from-purple-700 hover:to-indigo-700 text-white text-xl font-semibold justify-center rounded-lg border-2 px-5 py-2 items-center transition-all duration-200"
                >
                  Signup
                </button>
              </div>
              <div className="flex justify-end">
                <h1 className="mr-2">Already have account</h1>
                <button className="hover:underline hover:text-white">
                  <Link to="/login">login</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}