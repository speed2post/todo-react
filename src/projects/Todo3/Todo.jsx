import { useState } from "react";
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorate";
import "./Todo.css";

// const todoKey = "reactTodo"

// const getLocalStorageTodoData = () => { 
//     const rawTodos = localStorage.getItem(todoKey); 
//     if (!rawTodos) return []; 
//     return JSON.parse(rawTodos); 
// };

export const Todo = () => {
    const [task, setTask] = useState(() => getLocalStorageTodoData());

    //todo from submit
    const handelFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        //Empty value checked
        if (!content) return;

        //Duplicate value checked
        // if (task.includes(inputValue)) return;
        const isDuplicateTodo = task.find((curTask) => curTask.content === content);
        if (isDuplicateTodo) return;

        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    };

    //todo save to local storage
    // localStorage.setItem(todoKey, JSON.stringify(task));
    setLocalStorageTodoData(task)


    //todo delete a particular selected item
    const handelDeleteTodo = (Id) => {
        // console.log(delId); F
        const newTask = task.filter((curTask) => curTask.id !== Id);
        setTask(newTask)
    }

    //todo check a particular selected item
    const handelCheckTodo = (curId) => {
        const updateTask = task.map((curTask) => {
            if (curTask.id === curId) {
                return { ...curTask, checked: !curTask.checked };
            } else {
                return curTask;
            }
        });

        setTask(updateTask);
    }

    //todo clear all items
    const handelClearAllTodo = () => {
        setTask([]);
    }

    //todo clear all items
    const handelClearCheckedAllTodo = () => {
        const incompleteTask = task.filter((curTask) => curTask.checked === false)
        console.log(incompleteTask);
        setTask(incompleteTask);
    }


    return (
        <>
            <section className="todo-container">
                <header>
                    <h1>Task Manager</h1>
                    <TodoDate />
                </header>

                <TodoForm onAddTodo={handelFormSubmit} />

                <section className="myUnOrdList">
                    <ul className="todo-list">
                        {
                            task.map((curTask) => {
                                return (
                                    <TodoList
                                        key={curTask.id}
                                        id={curTask.id}
                                        data={curTask.content}
                                        checked={curTask.checked}
                                        onhandelCheckTodo={handelCheckTodo}
                                        onhandelDeleteTodo={handelDeleteTodo}
                                    />
                                );
                            })
                        }
                    </ul>
                </section>
                <section>
                    <button className="clear-btn"
                        onClick={handelClearAllTodo}>Clear All</button>
                    <button className="clear-btn"
                        onClick={handelClearCheckedAllTodo}>Remove Checked</button>
                </section>
            </section>
        </>
    );
}