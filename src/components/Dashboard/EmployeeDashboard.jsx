import React from 'react'
import Header from '../../other/Header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data ,handleLogout}) => {
  return (
    <div className = 'p-10 bg-[#ICICIC] h-screen ' >
       <Header data={data} handleLogout = {handleLogout} />
       <TaskListNumber data = {data}/>
       <TaskList data = {data}/>
    </div>
  )
}

export default EmployeeDashboard