import React from 'react'
import Button from '../components/UI/Button'

const Login = () => {
  return (
    <div className='flex items-center flex-col justify-center min-h-screen'>
        <h1 className='text-3xl font-bold my-10'> Welcome back ! </h1>
          <form action="flex flex-col ">
            <div>
              <label htmlFor="email" className='text-2xl'>Business email</label>
              <input type="email" className=' rounded-none relative block
                  border border-gray-300
                   placeholder-gray-500 text-gray-900 rounded-t-md px-3 py-3 w-full my-2 ' placeholder='user@exemple.com' required/>
            </div>
            <div>
              <label htmlFor="email" className='text-2xl'>Password</label>
              <input type="password" className=' rounded-none relative block
                  border border-gray-300
                   placeholder-gray-500 text-gray-900 rounded-t-md px-3 py-3 w-full text-2xl my-2' placeholder='********' required/>
            </div>
            <Button  className=" " type="submit" >Login
            </Button>
            <h1>New to .....?
              <span>
                <a href="http://localhost:5173/Sign_up" className='text-indigo-700 font-bold'>
                  Sign up
                </a>  
              </span>

            </h1>
            
          </form>
    </div>
  )
}

export default Login