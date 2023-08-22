import React from 'react'

function Footer() {
  return (
    <div>
        <div className="lg:flex sticky bottom-0 right-0 left-0
        block bg-black text-center text-white p-20 justify-around">
            <h1 className='text-2xl'>Buy Cars</h1>
            <div className='block lg:flex justify-between lg:w-1/2'>
            <div className='mt-5'>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div className='mt-5'>
                <ul>
                    <li>Cataloge</li>
                    <li>Differences</li>
                    <li>Cars</li>
                </ul>
            </div>
            <div className='mt-5'>
                <ul>
                    <li>Audi</li>
                    <li>Suzuki</li>
                    <li>Honda</li>
                </ul>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer