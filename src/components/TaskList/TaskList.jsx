import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[53%] overflow-x-auto w-full mt-8 flex items-center justify-start gap-4"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} elem={elem} />
        } else if (elem.newTask) {
          return <NewTask key={idx} elem={elem} />
        } else if (elem.failed) {
          return <FailedTask key={idx} elem={elem} />
        } else {
          return <CompleteTask key={idx} elem={elem} />
        }
      })}
    </div>
  )
}

export default TaskList
