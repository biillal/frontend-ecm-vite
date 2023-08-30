import { Box, Button, Image, Menu, MenuButton, MenuItem, MenuList, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { data } from '../data/Data'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons'
import NavBar from '../components/NavBar'
function Header({ avtiveHeader }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchData, setSearchData] = useState(null)
  const [open, setOpen] = useState(false)
  console.log(searchTerm);
  console.log(searchData);
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
  return (
    <div className={`${open ? "h-screen" : "h-[12vh]"} bg-blue-400 transition-all lg:bg-white relative  lg:mx-0 lg:h-[30vh] `}>
      <div className='flex justify-between container mx-auto items-center'>
        <i class="ri-menu-line lg:hidden block text-xl" onClick={handleOpen}></i>
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
          <div className='flex gap-1 justify-center'>
            <i class="ri-shopping-cart-2-fill text-2xl text-center"></i>
            <Text className='text-2xl font-body '>My Cart</Text>
          </div>
          <div className='ml-5'>
            <span className='text-lg font-body'>(0) items-$0.00</span>
          </div>
        </div>
      </div>

      <div className={`${open ? "bloc" : "hidden"} absolute mt-40 lg:mt-0 lg:container lg:mx-auto flex lg:justify-between justify-center items-center lg:py-5  lg:static flex-col lg:flex-row w-[100%]  `}>
        <div className=' '>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className='text-xl bg-blue-400 p-2 rounded-md' >
              Categories
            </MenuButton>
            <MenuList className='bg-blue-500  rounded-md'>
              <MenuItem minH='48px' className=''>
                <Link to='/category/1' className='flex hover:bg-blue-300 px-3 py-2'>
                  <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://placekitten.com/100/100'
                    alt='Fluffybuns the destroyer'
                    mr='12px'
                  />
                  <span>Fluffybuns the Destroyer</span>
                </Link>
              </MenuItem>
              <MenuItem minH='40px'>
                <Link to='/category/1' className='flex hover:bg-blue-300 px-3 py-2 w-full'>
                  <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://placekitten.com/120/120'
                    alt='Simon the pensive'
                    mr='12px'
                  />
                  <span>Simon the pensive</span>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className='flex flex-col'>
          <NavBar active={avtiveHeader} />
        </div>
        <div className='flex gap-x-3 flex-col lg:flex-row'>
          <Link to="/signin" className='flex border px-3 py-2 rounded-md bg-blue-400'>
            <i class="ri-user-fill text-2xl text-white"></i>
            <Text className='text-xl font-body text-white'>Sing In </Text>
          </Link>
          <Link to="/signup" className='flex border px-3 py-2 rounded-md bg-blue-400'>
            <i class="ri-key-2-fill text-2xl text-white"></i>
            <Text className='text-xl font-body text-white'>Sing Up </Text>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
