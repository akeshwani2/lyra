'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

function KanbanBoard() {

    const [columns, setColumns] = useState([])

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden justify-center px-[40px]">
        <div className="m-auto">
            <Button 
                className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg p-2 bg-gradient-to-r from-blue-600 to-black-400 hover:from-blue-800 hover:to-black-600"
                onClick={createNewColumn}
            >
                <Image src="/plus.svg" alt="plus" width={28} height={28}/>    
                Add Column
            </Button>
        </div>
    </div>
  )

  function createNewColumn() {
    
  }
}

export default KanbanBoard