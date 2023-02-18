import React from 'react'
import Button from '../components/UI/Button'
const Sign_up = () => {
  return (
    <div className='flex items-center flex-col justify-center min-h-screen'>
        <h1 className='text-3xl font-bold my-10'> Get started with ....... ! </h1>
          <form action="flex flex-col ">
          <div>
              <label htmlFor="email" className='text-2xl'>Full name</label>
              <input type="email" className=' rounded-none relative block
                  border border-gray-300
                   placeholder-gray-500 text-gray-900 rounded-t-md px-3 py-3 w-full my-2 ' placeholder='user' required/>
            </div>
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
                   placeholder-gray-500 text-gray-900 rounded-t-md px-3 py-2 w-full text-2xl my-2' placeholder='********' required/>
            </div>
            <Button  className=" " type="submit">Sign up
            </Button>
            <h1>Already have an account ? 
              <span>
                <a href="http://localhost:5173/login" className='text-indigo-700 font-bold '>
                  Login
                </a>  
              </span>

            </h1>
            
            
          </form>
    </div>
  )
}

export default Sign_up