import React from 'react'

const TodoItem = ({ task, onToggle, onDelete }) => {
    return (
        <div className="flex items-center justify-between p-3 bg-white border rounded shadow-sm">
            <div 
                className="flex items-center gap-2 flex-1"
                onClick={() => onToggle(task.id)}
            >
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="h-4 w-4"
                />
                <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.text}
                </span>
            </div>
            <button
                onClick={() => onDelete(task.id)}
                className="text-red-500 hover:text-red-700"
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;