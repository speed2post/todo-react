import React from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md';

export function TodoList({data, key, onhandelDeleteTodo}) {
    return (
        <>
            <li key={key} className="todo-item">
                <span>{data}</span>
                <button className="check-btn">
                    <MdCheck />
                </button>
                <button className="delete-btn"
                    onClick={() => onhandelDeleteTodo(data)}>
                    <MdDeleteForever />
                </button>
            </li>
        </>
    );
}
