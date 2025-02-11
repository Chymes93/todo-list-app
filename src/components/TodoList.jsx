import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ tasks, onToggle, onDelete }) => {
    return (
        <div className="space-y-2">
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TodoList;