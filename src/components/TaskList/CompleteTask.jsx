import React from 'react'

const CompleteTask = ({elem}) => {
  return (
   <div className="flex-shrink-0 h-[95%] w-[300px] bg-green-400 rounded-xl flex flex-col justify-between">
  {/* Top section */}
  <div>
    <div className="flex items-center justify-between m-5 text-large">
      <h3 className="bg-red-600 px-4 py-1 rounded-md">{elem.category}</h3>
      <h4>{elem.date}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold ml-5">{elem.title}</h2>
    <p className="text-sm m-5 mt-2">{elem.description}</p>
  </div>

  {/* Bottom buttons */}
  <div className="flex justify-between mb-5">
    <button className="bg-blue-600 w-[90%] py-1 px-2 text-sm rounded-sm ml-4">
     Completed
    </button>

  </div>
</div>

  )
}

export default CompleteTask