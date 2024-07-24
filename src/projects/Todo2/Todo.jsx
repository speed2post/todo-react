import { useState } from "react";
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./Todo.css";

export const Todo = () => {
    const [task, setTask] = useState([]);

    const handelFormSubmit = (inputValue) => {
        if (!inputValue) return;
        if (task.includes(inputValue)) return;
        setTask((prevTask) => [...prevTask, inputValue]);
    };

    const handelDeleteTodo = (delTask) => {
        // console.log(delTask);
        const newTask = task.filter((curTask) => curTask !== delTask);
        setTask(newTask)
    }

    const handelClearAllTodo = () => {
        setTask([]);
    }

    return (
        <>
            <section className="todo-container">
                <header>
                    <h1>Todo List</h1>
                    <TodoDate />
                </header>

                <TodoForm onAddTodo={handelFormSubmit} />

                <section className="myUnOrdList">
                    <ul className="todo-list">
                        {
                            task.map((curTask, index) => {
                                return (
                                    <TodoList
                                        data={curTask}
                                        key={index}
                                        onhandelDeleteTodo={handelDeleteTodo}
                                    />
                                );
                            })
                        }
                    </ul>
                </section>
                <section>
                    <button className="clear-btn" onClick={handelClearAllTodo}>Clear All</button>
                </section>
            </section>
        </>
    );
}