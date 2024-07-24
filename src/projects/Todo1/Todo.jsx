import { useState } from "react";
import "./Todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { LuGalleryHorizontal } from "react-icons/lu";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, setdateTime] = useState("");

    setInterval(() => {
        const now = new Date();
        const formatedDate = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();
        setdateTime(`${formatedDate} - ${formatedTime}`);
        // console.log(now.toLocalTimeString());
    }, 1000);
    
    const handeInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handelFormSubmit = (event) => {
        event.preventDefault();
        if (!inputValue) return;
        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);
        setInputValue("");
    };

    const handelDeleteTodo = (delTask) => {
        // console.log(delTask);
        const newTask = task.filter((curTask)=> curTask!==delTask); 
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
                    <h2>{dateTime}</h2>
                </header>
                <section className="form">
                    <form onSubmit={handelFormSubmit}>
                        <section className="myUnOrdList">
                            <div>
                                <input type="text"
                                    autoComplete="off"
                                    value={inputValue}
                                    onChange={handeInputChange}
                                // onChange={(event)=>setInputValue (event.target.value)}
                                // onChange={(event)=>handeInputChange(event.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit" className="todo-btn">Add Task</button>
                            </div>
                        </section>
                    </form>
                </section>
                <section className="myUnOrdList">
                    <ul className="todo-list">
                        {
                            task.map((curTask, index) => {
                                return (
                                    <li key={index} className="todo-item">
                                        <span>{curTask}</span>
                                        <button className="check-btn">
                                            <MdCheck />
                                        </button>
                                        <button className="delete-btn" 
                                        onClick={()=>handelDeleteTodo(curTask)}>
                                            <MdDeleteForever />
                                        </button>
                                    </li>
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