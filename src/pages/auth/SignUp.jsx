import { Box, Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    const [show, setShow] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const handleClick = () => { setShow(!show) }
    return (
        <div className='w-[100%] bg-slate-100 h-screen flex items-center justify-center'>
            <div className='bg-white w-[100%] md:w-[70px] lg:w-[40%] h-screen lg:h-[87vh] lg:rounded-lg'>
                <Text className="text-2xl text-center text-blue-500 font-body font-bold mt-7">Sign In</Text>
                <VStack
                    spacing={4}
                    align='stretch'
                    padding='20px 30px'
                    className='mt-8 lg:mt-0'
                >

                    <FormControl isRequired color="black" marginTop="15px">
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
                    <FormControl isRequired color="black" marginTop="15px">
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
                    <FormControl isRequired color="black" marginTop="15px">
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
                        colorScheme='blue'
                        color='white'
                        width="100%"
                        mt='10px'
                        className='bg-blue-500 rounded-md '
                        height='44px'
                        marginTop='20px'
                    >
                        Sign Up
                    </Button>
                    <Text className='text-center mt-3'>Already you have account ?<Link to='/signip' className='text-blue-500'> Login</Link> </Text>
                </VStack>
            </div>
        </div>

    )
}

export default SignUp
