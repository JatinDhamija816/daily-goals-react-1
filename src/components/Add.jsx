import React, { useEffect, useState } from 'react'

const Add = () => {

    const initial = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

    const [tasks, setTasks] = useState(initial)
    const [newTask, setNewTask] = useState({
        title: '', description: '', dueDate: '', priority: 'High',
    });
    const addTask = (e) => {
        e.preventDefault()
        setTasks([...tasks, newTask])
        setNewTask({
            title: '', description: '', dueDate: '', priority: 'High',
        })
        alert("Tasks Added Successfully")
    }
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    return (
        <div className='Add'>
            <h1 className='Heading'>Add Your Tasks</h1>
            <form>
                <input type="text" placeholder='Enter title' value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
                <textarea placeholder='Enter Description' value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
                <div className='date'>
                    <input type='date' value={newTask.dueDate}
                        onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    />
                    <select value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })} >
                        <option style={{ color: 'Red', backgroundColor: 'Black' }}>High</option>
                        <option style={{ color: 'yellow', backgroundColor: 'Black' }}>Medium</option>
                        <option style={{ color: 'Green', backgroundColor: 'Black' }}>Low</option>
                    </select>
                </div>
                <button onClick={addTask} className='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Add
