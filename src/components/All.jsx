import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const All = () => {
    const initial = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
    const [tasks, setTasks] = useState(initial);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterPriority, setFilterPriority] = useState('All');

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterPriority === 'All' || task.priority === filterPriority)
    )
    const deleteTask = (index) => {
        const updatedTasks = [...tasks]
        updatedTasks.splice(index, 1)
        setTasks(updatedTasks)
        alert('Tasks Deleted Successfully')
    }
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
    return (
        <div>
            <div className='filter'>
                <div className=''>
                    <input type='text' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)} >
                        <option>All</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>
            </div>
            <h2 >Upcoming Task</h2>
            {
                filteredTasks.map((task, index) => (
                    <div className='filterred'>
                        <div className='tasks'>
                            <div className='task'>
                                <h4>{task.title}</h4>
                                <p>{task.description}</p>
                                <p>{task.dueDate}</p>
                            </div>

                            <div className='condition'>
                                <p>{task.priority}</p>
                                <div className='icons'>
                                    <DeleteIcon onClick={() => deleteTask(index)} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default All
