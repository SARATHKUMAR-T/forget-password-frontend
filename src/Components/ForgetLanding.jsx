import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";

const ForgetLanding = () => {
  const [newPassword, setNewPassword] = useState();
 const [repeatPassword,setRepeatPassword]= useState()
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const { id, token } = useParams();

  // password Handler
  const resetPasswordHandler = async event => {
    event.preventDefault();
    const password = {
      password: newPassword,
    };

    const data = await fetch(
      `https://forgot-password-1.netlify.app/reset-password/${id}/${token}`,
      {
        method: "POST",
        body: JSON.stringify(password),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const result = await data.json();
    setMessage(result.message);
    if (result.newpassword) {
      setTimeout(()=>navigate('/'),2000)
    }
  };
  return (
    <Wrapper>
      <div className="max-w-md flex-1  rounded-lg shadow-lg bg-slate-300 mx-auto ">
        <h1 className=" p-2 text-xl font-bold">Reset Password</h1>
        <form
          className="max-w-md px-4 py-8  mx-auto"
          onSubmit={resetPasswordHandler}
        >
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Enter New password
            </label>
            <input
              type="password"
              id="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
            >
              Confirm New password
            </label>
            <input
              type="password"
              id="repeatPassword"
              value={repeatPassword}
              onChange={(e)=>setRepeatPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="text-gray-800 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        {message && (
          <div>
            <p className="text-md text-red-400">{message}</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default ForgetLanding;
