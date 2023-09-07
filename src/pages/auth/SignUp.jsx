import { Box, Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { SingUpUser } from '../../redux/apiCalls/authApiCalls'
import { RotatingLines } from 'react-loader-spinner'
import swal from 'sweetalert'
function SignUp() {
    const { loading, registerMessage } = useSelector((state) => state.auth)
    const [show, setShow] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = () => {
        dispatch(SingUpUser({ username, email, password, passwordConfirm }))
        if (registerMessage) {
            swal({
                title: registerMessage,
                icon: "success"
            }).then(isOk => {
                if (isOk) {
                    navigate('/signip')
                }
            })
        }
    }

    const handleClick = () => { setShow(!show) }
    return (
        <div className='w-[100%] bg-slate-100 h-screen flex items-center justify-center'>
            <div className='bg-white w-[100%] md:w-[70px] lg:w-[40%] h-screen lg:h-[95vh] lg:rounded-lg'>
                <Text className="text-2xl text-center text-blue-500 font-body font-bold mt-7">Sign Up</Text>
                <VStack
                    spacing={4}
                    align='stretch'
                    padding='20px 30px'
                    className='mt-8 lg:mt-0'
                >

                    <FormControl isRequired color="black" marginTop="10px">
                        <FormLabel>User name</FormLabel>
                        <Input
                            width='100%'
                            height='50px'
                            border="1px solid blue"
                            borderRadius="6px"
                            outline="none"
                            padding="0 15px"
                            name='username'
                            type='text'
                            placeholder='Jois dib'
                            onChange={(e) => setUsername(e.target.value)} />
                    </FormControl>
                    <FormControl isRequired color="black" marginTop="10px">
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
                    <FormControl isRequired color="black" marginTop="10px">
                        <FormLabel>passwored</FormLabel>
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
                            <InputRightElement width='4.5rem' marginTop='9px'>
                                <Button h="1.75rem" size="sm" onClick={handleClick}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired color="black" marginTop="10px">
                        <FormLabel>Password confirmation</FormLabel>
                        <InputGroup>
                            <Input
                                width='100%'
                                height='50px'
                                border="1px solid blue"
                                borderRadius="6px"
                                outline="none"
                                padding="0 15px"
                                name='passwordConfirm'
                                type={show ? "text" : "password"}
                                placeholder='********'
                                onChange={(e) => setPasswordConfirm(e.target.value)} />
                            <InputRightElement width='4.5rem' marginTop='9px'>
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
                            /> : "Sign Up"
                        }
                    </Button>
                    <Text className='text-center'>Already you have account ?<Link to='/signip' className='text-blue-500'> Login</Link> </Text>
                </VStack>
            </div>
        </div>

    )
}

export default SignUp
