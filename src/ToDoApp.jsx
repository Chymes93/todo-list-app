import React from 'react'
import { useState } from 'react'

const ToDoApp = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = (taskText) => {
        if (tastText.trim() !== '') {
            setTasks([...tasks, {
                id: Date.now(),
                text: taskText,
                completed: false
            }]);
            setNewTask('');
        }
    };

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className='container mx-auto max-w-2xl p-4'>
            <h1 className='text-3xl font-bold text-center mb-8'>Todo List</h1>
            <AddTodo
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
            />
            <TodoList
                tasks={tasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
            />
        </div>
    )
}

export default ToDoApp
