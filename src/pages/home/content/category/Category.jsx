import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllCategories } from '../../../../redux/apiCalls/categoryApiCalls'

function Category() {
    const { categories } = useSelector((state) => state.category)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategories())
    }, [])
    return (
        <div className='mt-[60px] '>
            <div className='w-11/12 mx-auto py-3 px-5 bg-white rounded-lg mb-12'>
                <div className='grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px] '>
                    {
                        categories && categories.map((i) => {
                            const handleSubmut = (i) => {
                                navigate(`product?category=${i.name}`)
                            }
                            return (
                                <div className='w-full h-[100px]  flex items-center justify-between cursor-pointer overflow-hidden'
                                    key={i._id}
                                    onClick={() => handleSubmut(i)}
                                >
                                    <h5 className={`text-[18px] leading-[1.3] `}>{i.name} </h5>
                                    <img src={i.image.url} alt="category" className='w-[120px] object-cover' />

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Category
