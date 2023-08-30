import React from 'react'
import styles from '../style/styles'
import { navItem } from '../data/Data'
import { Link } from 'react-router-dom'

function NavBar({active}) {
    return (
        <div className='flex flex-col lg:flex-row gap-y-6 mt-3 lg:mt-0'>
            {
                navItem && navItem.map((i, index) => {
                    console.log(index)
                    return (
                        <div className='flex'>
                            
                            <Link to={i.url}
                                className={`${active === index ? " text-green-400" : 'lg:text-white text-white' } font-body text-lg font-bold px-6 cursor-pointer`}
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
