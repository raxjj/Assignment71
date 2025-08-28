import React, {  } from "react";

import{Link} from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai';
import { Formik, useFormik } from "formik";
import * as Yup from 'yup'
import Input from "./Input";
export default function Login(){


     const Schema= Yup.object().shape({
    email:Yup.string().email().required(),
    password:Yup.string().min(8).required()
  })
 

  const {handleSubmit,values,handleChange,errors,
    touched,
    handleBlur,
    isValid} = useFormik({
    initialValues:{
        email:"",
        password:""
    },
    onSubmit:callLoginApi,validationSchema:Schema
  })


function callLoginApi(values){
    
    console.log("api called" ,values.email, values.password); 
}

    return(
        <div className=" bg-gray-300">
        <button className="px-10 text-2xl py-5">
            <Link to="/"><AiOutlineHome/> </Link>
                        
        </button> 
        <div className="flex justify-center bg-gray-300 h-screen items-center">
          <div className="bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-400 rounded-lg py-10 px-20">
                <h1 className="text-white font-bold justify-center text-center mb-5 text-2xl">Login </h1>
                <div>
                    <form action=""
                    method="post"
                    onSubmit={handleSubmit}>
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
                    
                    
                    <div className="flex justify-end">
                        <button
                    className="text-white hover:underline">
                        <Link to="/forget">Forget Password?</Link>
                    </button>
                    </div>
                    <br />
                    <div className="flex justify-center items-center mt-1">
                    <button type="submit"
                    disabled={!isValid}
                     className="text-center bg-gradient-to-r disabled:from-purple-200 from-purple-500 disabled:via-blue-200 via-blue-500 disabled:to-indigo-200 to-indigo-500 hover:from-purple-700 hover:to-indigo-700 text-white text-xl font-semibold justify-center rounded-lg border-2 px-5 py-2 items-center transition-all duration-200">
                        login
                    </button>
                    </div>
                    <div className="flex justify-end">
                        <h1 className="mr-2">New User?</h1>
                        <button className="hover:underline hover:text-white"><Link to ="/signup">Signup</Link></button>
                    </div>

                </form>
                </div>
            </div>

        </div>
        </div>
    )
}
