import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { productAction } from '../ActionCreater/ProductAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

const initialOem = {
  modelName:'',
  year:'',
  price:'',
  color:'',
  mileage:'',
  power:'',
  topSpeed:'',
  image:''
}

const initialDealer = {
  distance:'',
  scratch:'',
  OriginalPaint:'',
  totalAccidents:'',
  buyers:'',
  registrationPlace:''
}

function AddCars() {

  const [oemData, setOemData] = useState(initialOem);
  const [otherDetail, setOtherDetail] = useState(initialDealer);
  const [editData, setEditData] = useState(false);
  const dispatch = useDispatch();
  
  const getData = () => {
    fetch('https://attryb-server-p7cn.onrender.com/getproducts')
    .then((res) => res.json())
    .then((res) => {
      productAction(res.data, dispatch);
    })
  }

  let userDetails = useSelector((state) =>{ return state.loginReducer.userDetails});

  useEffect(() => {
    if(sessionStorage.getItem('editProductId')){
      let data = sessionStorage.getItem('editProductId');
      setEditData(true);
      
      fetch('https://attryb-server-p7cn.onrender.com/findone',{
          method:"POST",
          body:JSON.stringify({id: data}),
          headers:{
            'content-type':'application/json'
          }
      })
      .then((res) => res.json())
      .then((res) => {
        getData();
        setOemData(res.oemDetails)
        setOtherDetail(res.otherDetails)
      })

      sessionStorage.removeItem('editProductId');
    }
  },[])

  const handleOemChange = (e) => {
    e.preventDefault();

    const {name, value} = e.target;
    setOemData({...oemData,[name]:value })
  }

  const handleOtherDetailsChange = (e) => {
    e.preventDefault();

    const {name, value} = e.target;
    setOtherDetail({...otherDetail,[name]:value })
  }

  
 

  const handleClick = (e) => {
    e.preventDefault();

    const data = {
      oemdetails:oemData,
      otherdetails:otherDetail,
      userDetails:userDetails
    }
    if(oemData.modelName.length < 3 || oemData.color.length === 0 || oemData.image.length)
    if(editData){
      fetch('https://attryb-server-p7cn.onrender.com/updatecar',{
      method:"PATCH",
      body:JSON.stringify(data),
      headers:{
        'content-type':'application/json'
      }
    })
    .then((res) => res.json())
    .then((res) => {
      getData();
      toast.success('Details Updated', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setOemData(initialOem);
      setOtherDetail(initialDealer)
      setEditData(false)
    })
    }else{
    fetch('https://attryb-server-p7cn.onrender.com/addcar',{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        'content-type':'application/json'
      }
    })
    .then((res) => res.json())
    .then((res) => {
      getData();
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

      setOemData(initialOem);
      setOtherDetail(initialDealer)
    })
  }
  }

  return (
    <div className='lg:w-4/6 w-11/12 mx-auto'>
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
      <form action=""  >
        <fieldset  className='grid md:grid-cols-2 gap-3 bg-gray-300 grid-cols-1 border-2 border-slate-900 p-2 md:p-8'>
            <legend className='text-xl'>OEM Details</legend>
            <div>
              <label className='text-lg'>Model Name:</label>
              <input type="text" name='modelName' onChange={handleOemChange} value={oemData.modelName} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Year of Manufacture:</label>
              <input type="number" name='year' onChange={handleOemChange} value={oemData.year} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Price:</label>
              <input type="number" name='price' onChange={handleOemChange} value={oemData.price} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Color:</label>
              <input type="text" name='color' onChange={handleOemChange} value={oemData.color} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Mileage:</label>
              <input type="number" name='mileage' onChange={handleOemChange} value={oemData.mileage} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Engine Power:</label>
              <input type="text" name='power' onChange={handleOemChange} value={oemData.power} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Top Speed:</label>
              <input type="number" name='topSpeed' onChange={handleOemChange} value={oemData.topSpeed} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Image URL:</label>
              <input type="text" name='image' onChange={handleOemChange} value={oemData.image} className='w-full p-2 text-lg' required />
              </div>
        </fieldset>
      </form>
      <form action=""  >
        {/* distance:'',
  scratch:'',
  OriginalPaint:'',
  totalAccidents:'',
  buyers:'',
  registrationPlace:'' */}
        <fieldset  className='grid md:grid-cols-2 gap-3 bg-gray-300 grid-cols-1 border-2 border-slate-900 p-2 md:p-8'>
            <legend className='text-xl'>Dealer Details</legend>
            <div>
              <label className='text-lg'>Distance Covered:</label>
              <input type="number" name='distance' onChange={handleOtherDetailsChange} value={otherDetail.distance} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Total Scratches:</label>
              <input type="number" name='scratch' onChange={handleOtherDetailsChange} value={otherDetail.scratch} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Original Paint:</label>
              <input type="text" name='OriginalPaint' onChange={handleOtherDetailsChange} value={otherDetail.OriginalPaint} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Total Accidents:</label>
              <input type="number" name='totalAccidents' onChange={handleOtherDetailsChange} value={otherDetail.totalAccidents} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Total Buyers:</label>
              <input type="number" name='buyers' onChange={handleOtherDetailsChange} value={otherDetail.buyers} className='w-full p-2 text-lg' required />
              </div>
              <div>
              <label className='text-lg'>Registration Place:</label>
              <input type="text" name='registrationPlace' onChange={handleOtherDetailsChange} value={otherDetail.registrationPlace} className='w-full p-2 text-lg' required />
              </div>
        </fieldset>
      </form>
      <button onClick={handleClick} type='submit' className='w-72 bg-slate-600 transition-all duration-500 ease-linear hover:bg-blue-700 hover:text-xl hover:rounded-lg text-gray-200 my-5 mx-auto text-lg py-1 px-3' >{editData ? "Update" : "Submit"}</button>
    </div>
  )
}

export default AddCars