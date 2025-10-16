import React from 'react'

const Header = ({data , handleLogout}) => {
  return (
    <div className='flex items-end justify-between'><h1 className ='text-2xl font-medium '>Hello, <br /> <span className = 'text-3xl font-semibold'>{data?.firstName} 👋</span></h1> 
    <button onClick={handleLogout} className='bg-red-500  text-xl font-medium text-white px-5 py-2 rounded-md'>Log out</button>
    </div>
  )
}

export default Header