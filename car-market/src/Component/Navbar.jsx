import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logoutAction } from '../ActionCreater/LoginActions'
import { useDispatch } from 'react-redux'

function Navbar() {

  const token = useSelector((state) =>{ return state.loginReducer.userDetails.token});
  let userDetails = useSelector((state) =>{ return state.loginReducer.userDetails});
  let user;

  const dispatch = useDispatch();

  if(token){
    user = userDetails.auth.role
  }

  const handleClick = () => {
    const data = {
      auth:'',
      token:''
    }
    logoutAction(data, dispatch)
  }
  return (
    <div className='lg:flex block text-center bg-black sticky top-0 z-10 text-white justify-between p-5 lg:p-8 align-center'>
        <div className='lg:w-56 w-full text-center '>
            <Link to='/'><img className='lg:w-60 w-24 -m-0 lg:-m-8' src="https://img.freepik.com/premium-vector/sport-car-logo-automotive-logo-design_445285-559.jpg" alt="" /></Link>
        </div>
        <ul className='flex justify-between lg:w-2/5'>
            <Link to='#'><li>About</li></Link>
            <Link to={'/store'}><li>Store</li></Link>
            {user === 'dealer' && <Link to={'/products'}><li>Cars List</li></Link>}
            {user === 'dealer' && <Link to={'addcar'}><li>AddCars</li></Link>}
            {token ? <li onClick={handleClick} className='cursor-pointer'>Logout</li> : <Link to='/login'><li>Login</li></Link>}
        </ul>
    </div>
  )
}

export default Navbar