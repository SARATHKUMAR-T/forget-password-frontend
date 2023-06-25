import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatpassword, setRepeatPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  // redirection to login
  const logHandler = () => {
    navigate("/");
  };

  const handleForm = async event => {
    event.preventDefault();

    const userDetails = {
      firstName,
      lastName,
      email,
      password,
    };

    const request = await fetch(
      "https://forget-password-backend.vercel.app/signup",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const result = await request.json();

    if (result.token) {
      setError("");
      localStorage.setItem("token", result.token);
      navigate("/home");
    } else {
      setError(result.message);
    }
  };

  return (
    <Wrapper>
      <div className="signup min-h-screen flex-1 p-4 flex items-center  justify-center">
        <div className="flex-1 px-6 py-8 rounded-lg max-w-md mx-auto bg-slate-300 ">
          <h1 className="mb-6 text-xl font-bold">Signup</h1>

          <form onSubmit={handleForm}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Jhon doe"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Jhon doe"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
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
            <div className="mb-6">
              <label
                htmlFor="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Repeat password
              </label>
              <input
                type="password"
                id="repeat-password"
                value={repeatpassword}
                onChange={e => setRepeatPassword(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>

            <button
              type="submit"
              className="text-gray-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register new account
            </button>
          </form>
          {error && <div className="text-md text-red-500">!{error}</div>}
          <div className="mt-6">
            <span className="text-blue-800">Exisiting User? </span>
            <button className="underline" onClick={logHandler}>
              Login please
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Signup;
