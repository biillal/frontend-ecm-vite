import { Avatar, Box, Button, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { data } from '../data/Data'
import { Link, useNavigate } from 'react-router-dom'
import { BellIcon, CheckCircleIcon, ChevronDownIcon } from '@chakra-ui/icons'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/apiCalls/authApiCalls'
import { getAllCategories } from '../redux/apiCalls/categoryApiCalls'
function Header({ avtiveHeader }) {
  const { user } = useSelector((state) => state.auth)
  const { categories } = useSelector((state) => state.category)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchData, setSearchData] = useState(null)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSearchChange = (e) => {
    const term = e.target.value;

    setSearchTerm(term)
    const filtredProduct = data.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filtredProduct)
    if (term === "") {
      setSearchData("")
    }
  }


  const handleOpen = () => {
    setOpen((cuState) => {
      return !cuState
    })
  }
  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/signip')
  }
  useEffect(() => {
    dispatch(getAllCategories())
  }, [])
  return (
    <>
      <div className='fixed w-[100%] z-30 lg:static '>
        <div className={`${open ? "h-screen" : "h-[12vh]"}  shadow-md bg-blue-700 lg:shadow-none z-50 transition-all lg:bg-white relative  lg:mx-0 lg:h-[30vh] `}>
          <div className='flex justify-between container mx-auto items-center'>
            <i class="ri-menu-line lg:hidden block text-xl " onClick={handleOpen}></i>
            <div className=''>
              <Image src={logo} height='80px' />
            </div>
            <div className={`${open ? "bloc" : "hidden lg:block"} absolute top-28 ml-5 md:left-6 lg:static w-[90%]  lg:w-[50%]`}>
              <div className=' relative'>
                <input type='text'
                  placeholder='Search products...'
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className='h-[50px] w-full px-2 font-body border-blue-600 border-[2px] placeholder:text-lg rounded-md'
                />
                <i class="ri-search-line absolute right-2 top-2 text-xl cursor-pointer "></i>
                {
                  searchData && searchData.length !== 0 ? (
                    <div className='absolute min-h-[30vh] w-full bg-blue-300  rounded-b-md shadow-sm z-[9] '>
                      {
                        searchData.map((i) => {
                          const d = i.name
                          const product_name = d.replace(/\s+/g, "-")
                          return (
                            <Link to={`/product/${i.id}`}>
                              <VStack
                                divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'

                              >
                                <Box display='flex' alignItems="center" _hover={{ bg: "blue" }}>
                                  <Image
                                    borderRadius='full'
                                    boxSize='75px'
                                    src={i.image}
                                    alt='Dan Abramov'
                                    padding='5px 10px'
                                  />
                                  <Text className='text-xl'>{i.name} </Text>
                                </Box>
                              </VStack>
                            </Link>
                          )
                        })
                      }
                    </div>
                  ) : null
                }
              </div>
            </div>
            <div className=''>
              <div className='flex gap-1 justify-center hover:text-blue-400'>
                <i class="ri-shopping-cart-2-fill text-2xl text-center text-white lg:text-black"></i>
                <Link to='/cart' className='text-2xl font-body text-white lg:text-black'>My Cart</Link>
              </div>
              <div className='ml-5'>
                <span className='text-lg font-body'>(0) items-$0.00</span>
              </div>
            </div>
          </div>

          <div className='bg-blue-500  top-0 w-[100%] z-40 '>
            <div className={`${open ? "bloc" : "hidden lg:flex"} absolute mt-24 lg:mt-0 lg:container lg:mx-auto flex lg:justify-between justify-center items-center lg:py-5  lg:static  lg:flex-row flex-col w-[100%]  `}>
              <div className=' '>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className='text-xl bg-blue-400 p-2 rounded-md' >
                    Categories
                  </MenuButton>
                  <MenuList className='bg-blue-500  rounded-md'>
                    {
                      categories.map((cat) => {
                        return (
                          <MenuItem minH='48px' className=''>
                            <Link to={`category/${cat._id}`} className='flex w-[100%] px-3 py-2'>
                              <Image
                                boxSize='2rem'
                                borderRadius='full'
                                src={cat.image.url}
                                alt='Fluffybuns the destroyer'
                                mr='12px'
                              />
                              <span>{cat.name}</span>
                            </Link>
                          </MenuItem>
                        )
                      })
                    }

                  </MenuList>
                </Menu>
              </div>
              <div className='flex flex-col'>
                <NavBar active={avtiveHeader} />
              </div>
              <div className='flex gap-x-3 flex-col lg:flex-row gap-y-4 mt-5 lg:my-0 z-50'>
                {
                  user ? (
                    <div>
                      <Menu>
                        <MenuButton as={Button} name={user.user.username} >
                          <Box display='flex' gap='5px'>
                            <Avatar size='sm' cursor='pointer' name={user.user.username} src={user.user.image.url} />
                            <Text className='text-lg font-body font-bold'>{user.user.username} </Text>
                          </Box>
                        </MenuButton>
                        <MenuList>
                          <Link to={`/profile/${user.user._id}`}><MenuItem>My Profile</MenuItem></Link>
                          <MenuDivider />
                          <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  ) : (
                    <>
                      <Link to="/signip" className='flex border px-3 py-2 rounded-md bg-blue-400'>
                        <i class="ri-user-fill text-2xl text-white"></i>
                        <Text className='text-xl font-body text-white'>Sing In </Text>
                      </Link>
                      <Link to="/signup" className='flex border px-3 py-2 rounded-md bg-blue-400'>
                        <i class="ri-key-2-fill text-2xl text-white"></i>
                        <Text className='text-xl font-body text-white'>Sing Up </Text>
                      </Link>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <br className='lg:hidden' />
      <br className='lg:hidden' />
      <br className='lg:hidden' />
      <br className='lg:hidden' />


    </>
  )
}

export default Header
