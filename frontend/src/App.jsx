import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  return (
    <div>
      <CreateTodo/>
      <Todos todos={[
        {
          title: "go to gym",
          description: "sohail goes to gym",
          completed: "false"
        }
      ]}></Todos>
    </div>
  )
}

export default App
