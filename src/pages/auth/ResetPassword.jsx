import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RessetPassword, getRessetPassword } from '../../redux/apiCalls/passwordApiCalls'
import { RotatingLines } from 'react-loader-spinner'

function ResetPassword() {
    const [show, setShow] = useState(false)
    const [password, setPassword] = useState('')
    const { isError, loading } = useSelector((state) => state.password)
    const { userId, token } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getRessetPassword(userId, token))
    }, [userId, token])
    const handleSubmit = () => {
        dispatch(RessetPassword(password, { userId, token }))
    }
    const handleClick = () => { setShow(!show) }
    return (
        <div className='w-[100%] flex  items-center justify-center lg:mt-[230px] '>
            {
                isError ? <h1>Not Found</h1>
                :
                <>
                <div className=' w-[40%]'>
                <Text className='text-center text-2xl font-body font-bold'>Resset Password</Text>
                <FormControl isRequired color="black" marginTop="25px">
                    <FormLabel>New Password</FormLabel>
                    <InputGroup>
                        <Input
                            width='100%'
                            height='44px'
                            border="1px solid blue"
                            borderRadius="6px"
                            outline="none"
                            padding="0 15px"
                            name='password'
                            type={show ? "text" : "password"}
                            placeholder='********'
                            onChange={(e) => setPassword(e.target.value)} />
                        <InputRightElement width='4.5rem' marginTop='2px'>
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
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
            </div>
                </>
            }
        </div>
    )
}

export default ResetPassword
