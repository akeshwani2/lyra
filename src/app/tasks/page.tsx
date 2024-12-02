import KanbanBoard from '@/components/ui/KanbanBoard'
import React from 'react'

const TasksPage = () => {
  return (
    <div className='h-screen overflow-hidden text-white text-2xl font-bold'>
      <KanbanBoard />
    </div>
  )
}

export default TasksPage

