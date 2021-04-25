import React,{ useContext,useState,useEffect } from 'react'
import {TaskListContext} from '../Contexts/TaskListContext'

const TaskForm = () => {

    const { addTask,clearList,editTask,editItem } = useContext(TaskListContext)

    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if(editItem == null) {
            addTask(title)
            setTitle("")
        }else{
            editTask(title,editItem.id)
        }

    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }



    useEffect(() => {
        if(editItem !== null){
            setTitle(editItem.title)
        }else{
            setTitle("")
        }
    },[editItem])


    return (
       <form onSubmit={handleSubmit} className="form">
           <input onChange={handleChange} value={title} type="text" className="task-input" placeholder="Add Task..." required></input>
           <div className="buttons">
               <button type="submit" className="btn add-task-btn">{editItem ? "Edit Task" : "Add Task"}</button>
               <button onClick={clearList} className="btn clear-btn">Clear</button>
           </div>
       </form>
    )
}

export default TaskForm
