import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAction } from '../ActionCreater/LoginActions';
import { useDispatch } from 'react-redux';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("customer");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const handleName = (e) => {
    setName(e.target.value);
  };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      role
    };

    setEmail('');
    setPassword('')
    return fetch("https://attryb-server-p7cn.onrender.com/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // localStorage.setItem("token", JSON.stringify(res.token));
        // localStorage.setItem("user", JSON.stringify(res.data));

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
            navigate("/login");
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
        <p className='text-lg'>Name:</p>
        <input className='w-full text-lg p-1' name='name' value={name} onChange={handleName} type="text" />
        <p className='text-lg mt-3'>Email:</p>
        <input className='w-full text-lg p-1' name='email' value={email} onChange={handleEmail} type="text" />
        <p className='mt-4 text-lg'>Select Role:</p>
        <select name="role" className=' w-full text-base p-1' value={role} onChange={handleRole} id="">
          <option value="dealer">Dealer</option>
          <option value="customer">Customer</option>
        </select>
        <p className='text-lg mt-3'>Passowrd:</p>
        <input className='w-full text-lg p-1' type="password" name="password" value={password} onChange={handlePass} id="" />
        <button className='block w-32 text-base mt-6 text-gray-50 py-2 px-4 bg-slate-700' onClick={handleClick}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Signup