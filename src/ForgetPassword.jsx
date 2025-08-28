import React from "react";
import {Link} from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai';
import * as Yup from "yup"
import {useFormik, Formik } from "formik";


export default function ForgetPassword(){

     const Schema= Yup.object().shape({
      email:Yup.string().email().required(),
      password:Yup.string().min(8).required()
    })
   
  
    const {handleSubmit,values,handleChange,errors,
      touched,
      handleBlur,
      } = useFormik({
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
                <h1 className="text-white font-bold justify-center text-center mb-5 text-2xl">Forget Password </h1>
                <div>
                    <form action=""
                    onSubmit={handleSubmit}>
                    <label htmlFor="email"></label>
                    <input type="email"
                    className="mb-2 rounded-md p-2 w-[300px]"
                    placeholder="enter email" 
                    required
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}/>
                    <br />
                    {touched.email&&errors.email&&
                    (<div className="text-red-300">{errors.email}</div>)}'
                    
                   
                    <br />
                    <div className="flex justify-center items-center mt-1">
                    <button type="submit"
                     className="text-center bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 hover:from-purple-700 hover:to-indigo-700 text-white text-xl font-semibold justify-center rounded-lg border-2 px-5 py-2 items-center transition-all duration-200">
                        Reset Password
                    </button>
                    </div>
                    
<div className="flex justify-between items-center mt-4">
  <div className="flex items-center">
    <h1>Back to </h1>
    <button className="hover:text-white ml-1 hover:underline">
      <Link to="/login">Login</Link>
    </button>
  </div>
  <div className="flex items-center">
    <h1 className="mr-2">New User?</h1>
    <button className="hover:underline hover:text-white"><Link to="/signup">Signup</Link></button>
  </div>
</div>


                </form>
                </div>
            </div>

        </div>
        </div>
    )
}