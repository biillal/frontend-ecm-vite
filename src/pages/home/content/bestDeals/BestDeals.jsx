import React, { useEffect, useState } from 'react'
import { productData } from '../../../../data/Data'
import ProductCard from '../../../../components/product/ProductCard'

function BestDeals() {
    const [data, setData] = useState([])
    useEffect(() => {
        const d = productData && productData.sort((a, b) => b.total_sell - a.total_sell)
        const firstFive = d.slice(0, 5)
        setData(firstFive)
    }, [])
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]'>
                <h1>Best Deals</h1>
            </div>
            <div className='grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]'>
                {
                    data.map((i, index) => {
                        return (
                            <ProductCard product={i} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestDeals
