import React from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md';

export function TodoList({ 
    id,
    data,
    checked,
    onhandelCheckTodo,
    onhandelDeleteTodo }) {
    return (
        <>
            <li className="todo-item">
                <span className={checked ? "checkList" : "notCheckList" }>{data}</span>
                <button className="check-btn"
                    onClick={() => onhandelCheckTodo(id)}>
                    <MdCheck />
                </button>
                <button className="delete-btn"
                    onClick={() => onhandelDeleteTodo(id)}>
                    <MdDeleteForever />
                </button>
            </li>
        </>
    );
}
