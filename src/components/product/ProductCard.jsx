import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductDetaildCard from './ProductDetaildCard'
function ProductCard({ product, key }) {
    const [click, setClick] = useState(false)
    const [open, setOpen] = useState(false)
    const d = product.name
    const product_name = d.replace(/\s+/g, "-")
    return (
        <div className='w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer ' key={key}>
            <div className='flex justify-end'>

            </div>
            <Link to={`/products/${product_name}`}>
                <img src={product.image_Url[0].url} alt='' className='w-full h-[170px] object-contain ' />
            </Link>
            <Link to=''>
                <h5>{product.shop.name} </h5>
            </Link>
            <Link to={`/products/${product_name}`}>
                <h4 className='pb-3 font-[500] '>
                    {product.name.length > 40 ? product.name.slice(0, 40) + "..." : product.name}
                </h4>
                <div className='flex'>
                    <i class="ri-star-fill mr-2 cursor-pointer text-[#F6BA00] "></i>
                    <i class="ri-star-fill mr-2 cursor-pointer text-[#F6BA00] "></i>
                    <i class="ri-star-fill mr-2 cursor-pointer text-[#F6BA00] "></i>
                    <i class="ri-star-fill mr-2 cursor-pointer text-[#F6BA00] "></i>
                    <i class="ri-star-line text-[#F6BA00]"></i>
                </div>
                <div className='py-2 flex items-center justify-between'>
                    <div className='flex'>
                        <h5 className='font-bold text-[18px] text-[#333] font-body'>
                            {
                                product.price === 0 ? product.price : product.discount_price
                            }
                            $
                        </h5>
                        <h4 className='font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through'>
                            {product.price ? product.price + " $" : null}
                        </h4>
                    </div>
                    <span className='font-[400] text-[17px] text-[#68d284] '>
                        {product.total_sell} sold
                    </span>
                </div>
            </Link>
            {
                click ? (
                    <i class={`${click ? "text-[red]" : "text-[#333] "} ri-heart-fill cursor-pointer absolute right-2 top-5 text-2xl`}
                        onClick={() => setClick(!click)}
                    ></i>
                ) :
                    <i class={`${click ? "text-[red]" : "text-[#333] "} ri-heart-fill cursor-pointer absolute right-2 top-5 text-2xl`}
                        onClick={() => setClick(!click)}
                    ></i>
            }

            <i class="ri-eye-line cursor-pointer absolute right-2 top-14 text-2xl text-[#444] " onClick={()=>setOpen(!open)}></i>
            <i class="ri-shopping-cart-2-line absolute right-2 top-24 text-2xl text-[#444]"></i>
            {
                open ? (
                    <ProductDetaildCard open={open} setOpen={setOpen} product={product}/>
                ) : null
            }
        </div>
    )
}

export default ProductCard
