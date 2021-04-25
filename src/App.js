import React from 'react'
import './App.css'
import TaskList from './Components/TaskList'
import TaskForm from './Components/TaskForm'
import Header from './Components/Header'
import TaskListContextProvider from './Contexts/TaskListContext'



const App = () => {
  return (
    <TaskListContextProvider>
    <div className="container">
      <div className="app-wrapper">
        <div className="main">
        <Header />
        <TaskForm />
        <TaskList/>
        </div>
      </div>

    </div>
    </TaskListContextProvider>
  )
}

export default App
