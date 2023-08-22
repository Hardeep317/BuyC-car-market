import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { productAction } from '../ActionCreater/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => {return state.productReducer.products});
  const token = useSelector((state) =>{ return state.loginReducer.userDetails.token});

  

  const getData = () => {
    fetch('https://attryb-server-p7cn.onrender.com/getproducts')
    .then((res) => res.json())
    .then((res) => {
      productAction(res.data, dispatch);
    })
  }

  useEffect(() => {

    if(!token){
      navigate('/login')
    }

    if(data.length === 0){
    getData();
    }
  },[token])

  const handleDelete = (id) => {
    fetch(`https://attryb-server-p7cn.onrender.com/deletecar?id=${id}`,{
      method: 'DELETE',
    })
    .then(() => {
      getData();
      toast.warning('Item Deleted', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
  }

  return (
    <div>
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
      <div style={{minHeight:"400px"}} className="flex flex-col overflow-x-hidden">
  <div className="sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-4 py-4">Sr. No.</th>
              <th scope="col" className="px-4 py-4">Model Name</th>
              <th scope="col" className="px-4 py-4">Color</th>
              <th scope="col" className="px-4 py-4">Mileage</th>
              <th scope="col" className="px-4 py-4">Price</th>
              <th scope="col" className="px-4 py-4">Top Speed</th>
              <th scope="col" className="px-4 py-4">View</th>
              <th scope="col" className="px-4 py-4">Edit</th>
              <th scope="col" className="px-4 py-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 && data.map((item, idx) => {
                return <tr key={idx} className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-4 py-4 font-medium">{idx+1}</td>
                <td className="whitespace-nowrap px-4 py-4">{item.modelName}</td>
                <td className="whitespace-nowrap px-4 py-4">{item.color}</td>
                <td className="whitespace-nowrap px-4 py-4">{item.mileage}</td>
                <td className="whitespace-nowrap px-4 py-4">{item.price}</td>
                <td className="whitespace-nowrap px-4 py-4">{item.topSpeed}</td>
                <td className="whitespace-nowrap px-2 py-1"><Link to={`/products/${item._id}`}><button className='bg-sky-600 rounded-md text-white py-2 px-3 text-base'>View</button></Link></td>
                <td className="whitespace-nowrap px-2 py-1"><button onClick={() => {sessionStorage.setItem('editProductId', item._id)}} className='bg-green-600 rounded-md text-white py-2 px-3 text-base'><Link to={`/addcar`}>Edit</Link></button></td>
                <td className="whitespace-nowrap px-2 py-1"><button onClick={ () => {handleDelete(item._id)}} className='bg-red-600 rounded-md text-white py-2 px-3 text-base'>Delete</button></td>
              </tr>
              })
            }
            
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Products