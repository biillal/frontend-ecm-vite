import React from 'react'
import styles from '../style/styles'
import { navItem } from '../data/Data'
import { Link } from 'react-router-dom'

function NavBar({active}) {
    return (
        <div className='flex flex-col lg:flex-row'>
            {
                navItem && navItem.map((i, index) => {
                    console.log(index)
                    return (
                        <div className='flex'>
                            
                            <Link to={i.url}
                                className={`${active === index ? " text-[#17dd1f]" : 'text-blue-600' } font-[500] px-6 cursor-pointer`}
                            >
                                {i.title}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavBar
