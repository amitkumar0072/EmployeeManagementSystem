import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{ 
        e.preventDefault() 
         handleLogin(email , password)
        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className=' border-2 border-emerald-600 pt-40 pb-10 px-15' >
            <form onSubmit  ={(e)=>{
                   submitHandler(e)
            }}
             className='flex flex-col item-center justify-center' >
                <input 
                 value = {email}
                onChange={(e)=>{
                    setEmail(e.target.value) 
                   
                  
                }} 
               
                
                required className='text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-grey-400' type="email" placeholder='Enter your email' />
                <input 
                 value = {password}
                onChange={(e)=>{
                   
                    setPassword(e.target.value)
                }}
                required className='text-black outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full mt-3 mb-20 placeholder:text-grey-400' type="password" placeholder='Enter your Password' />
                <button className="text-white bg-emerald-600 border-2 border-emerald-600 px-4 py-2 text-lg rounded-full mt-3 w-auto">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login