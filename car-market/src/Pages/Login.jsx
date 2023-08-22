import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAction } from '../ActionCreater/LoginActions';
import { useDispatch } from 'react-redux';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    setEmail('');
    setPassword('')
    return fetch("https://attryb-server-p7cn.onrender.com/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.token));
        localStorage.setItem("user", JSON.stringify(res.data));

        const dataToSend = {
          auth: res.data,
          token: res.token,
        };

        loginAction(dataToSend, dispatch);
        setEmail("");
        setPassword("");
        if (res.response === "success") {


          toast.success(res.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/store");
          }, 1500);
        } else {
          toast.error(res.error, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
  };

  return (
    <div className='w-11/12 lg:w-1/3 h-96 mx-auto my-10 bg-gray-300 flex justify-center border-2 border-gray-950'>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='w-full flex justify-center items-center'>
        <div className='w-full lg:p-7'>
        <p className='text-lg'>Email:</p>
        <input className='w-full text-lg p-1' name='email' value={email} onChange={handleEmail} type="text" />
        <p className='text-lg mt-5'>Passowrd:</p>
        <input className='w-full text-lg p-1' type="password" name="password" value={password} onChange={handlePass} id="" />
        <button className='block w-32 text-base mt-6 text-gray-50 py-2 px-4 bg-slate-700' onClick={handleClick}>Submit</button>
        <p className='float-right'>Don't have an account <Link className='text-blue-700' to={'/signup'}>Signup</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login