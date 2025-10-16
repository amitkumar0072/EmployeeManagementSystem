import React from 'react'

const FailedTask = ({elem}) => {
  return (
   <div className='flex-shrink-0 h-[95%] w-[300px] bg-yellow-500 rounded-xl flex flex-col justify-between'>
       <div>
        <div className='flex items-center justify-between m-5 text-large '>
         <h3 className='bg-red-600 px-4 py-1  rounded-md'>{elem.category}</h3>
        <h4>{elem.date}</h4>
       </div>
      <h2 className='mt-5 text-2xl font-semibold ml-5'>{elem.title}</h2>
      <p className='text-sm m-5 mt-2'>{elem.description}</p>
       </div>
      <div className = 'mb-5 '>
        <button className = 'w-[90%] bg-red-700 rounded-sm text-sm ml-4 px-2 py-1 mt-4'> Failed</button>
      </div>

      </div>
  )
}

export default FailedTask