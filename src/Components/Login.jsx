import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 const [error,setError]=useState()

    const navigate=useNavigate()

    const signupHandler = () => {
      navigate("/signup");
    };
  
    const passwordHandler = () => {
      navigate("/forgot-password");
    };
  
    const loginHandler = async event => {
      event.preventDefault();
      const userDetails = {
        email,
        password,
      };
  
      const req=await fetch (`https://forget-password-backend.vercel.app/login`,{
        method:"POST",
        body:JSON.stringify(userDetails),
        headers:{
          "content-type":"application/json"
        }
      })
  
      const data=await req.json()
  
      if(data.token){
        setError('')
        localStorage.setItem('token',data.token)
        navigate('/home')
      }
      else{
        setError(data.message)
      }
  
    };

  return (
    <Wrapper>

        <div className="max-w-md flex-1  rounded-lg shadow-lg bg-slate-300 mx-auto ">
          <h1 className=" p-2 text-xl font-bold">Login</h1>
          <form className="max-w-md px-4 py-8  mx-auto" onSubmit={loginHandler}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@mail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>

            <button
              type="submit"
              className="text-gray-800 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
          {error && <div className="font-medium text-red-500 mb-4">! {' '}{error}</div>}
          <div className="mb-4">
            <button className="underline" onClick={passwordHandler}>
              Forgot Password?
            </button>
          </div>
          <div className="mb-4">
            <span className="text-blue-800">New User? </span>
            <button className="underline" onClick={signupHandler}>
              Register new account
            </button>
          </div>
        </div>
    </Wrapper>

  );
};

export default Login;
