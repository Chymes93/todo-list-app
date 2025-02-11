import React from 'react'

const AddTodo = ({ newTask, setNewTask, addTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 p-2 border rounded"
            />
            <button 
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add
            </button>
        </form>
    );
};

export default AddTodo;