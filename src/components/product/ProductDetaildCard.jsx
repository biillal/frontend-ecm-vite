import React, { useState } from 'react'

function ProductDetaildCard({ open, setOpen, product }) {
    const [count, setCount] = useState(1)
    const [click, setClick] = useState(false)
    const [select, setSelect] = useState(false)
    return (
        <div className='bg-[#fff]  '>
            {
                product ? (
                    <div className='fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center'>
                        <div className='w-[90%] md:w-[60%] h-[90vh] overflow-y-scroll md:h-[75vh] bg-white rounded-md relative p-4'>
                            <i class="ri-close-fill text-3xl absolute right-3 top-3 z-50"
                                onClick={() => setOpen(false)}
                            ></i>
                            <div className='block w-full md:flex'>
                                <div className='w-full md:w-[50%] '>
                                    <img src={product.image_Url[0].url} alt=''/>
                                    <div className='flex'>
                                        <img src={product.shop.shop_avatar.url} alt='' className='w-[50px] h-[50px] rounded-full mr-2 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ): null
      }
        </div>
    )
}

export default ProductDetaildCard
