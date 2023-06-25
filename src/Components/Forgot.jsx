import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";

function Forgot() {
  const [email, setEmail] = useState();
  const [error, setError] = useState();

  const forgotHandler = async event => {
    event.preventDefault();

    const user = { email };
    console.log(email);

    const data = await fetch(`https://forget-password-backend.vercel.app/forgot-password`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });

    const result = await data.json();
    console.log(result);

    if (!result.user) {
      setError(result.message);
    }
    setEmail("");
    if (result.message === "Email sent successfully") {
      setTimeout(() => alert("Email sent successfully"), 1000);
    }
  };

  return (
    <Wrapper>

      <div className="max-w-md flex-1  rounded-lg shadow-lg bg-slate-300 mx-auto ">
        <h1 className=" p-2 text-xl font-bold">Forgot Password</h1>

        <form className="max-w-md px-4 py-8  mx-auto" onSubmit={forgotHandler}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Please enter your Registered Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@mail.com"
            />
          </div>

          <button
            type="submit"
            className="text-gray-800 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Link
          </button>
        </form>
        {error && (
          <div>
            <p className="text-md text-red-500 mb-2">{error}</p>
            <p className="text-md text-blue-600 mb-2 underline">
              Check Your Email Please
            </p>
          </div>
        )}
      </div>
    </Wrapper>

  );
}

export default Forgot;
