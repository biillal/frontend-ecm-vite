import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { forgotPassword } from '../../redux/apiCalls/passwordApiCalls'
import { RotatingLines } from 'react-loader-spinner'

function ForgotPassword() {
    const {loading } = useSelector((state) => state.password)

    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = () => {
        dispatch(forgotPassword(email))
    }
    return (
        <div className='w-[100%] flex  items-center justify-center lg:mt-[230px] '>
            <form className=' w-[40%]'>
                <Text className='text-center text-2xl font-body font-bold'>Forgot Password</Text>
                <FormControl isRequired color="black" marginTop="15px">
                    <FormLabel>Email</FormLabel>
                    <Input
                        width='100%'
                        height='50px'
                        border="1px solid blue"
                        borderRadius="6px"
                        outline="none"
                        padding="0 15px"
                        name='email'
                        type='email'
                        placeholder='Jois@gmail.com'
                        onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <Button
                    onClick={handleSubmit}
                    colorScheme='blue'
                    color='white'
                    width="100%"
                    mt='10px'
                    className='bg-blue-500 rounded-md '
                    height='44px'
                    marginTop='15px'
                >
                    {
                        loading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="40"
                            visible={true}
                        /> : "Submit"
                    }
                </Button>
            </form>
        </div>
    )
}

export default ForgotPassword
