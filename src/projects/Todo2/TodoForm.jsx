import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState("");

    const handeInputChange = (event) => {
        setInputValue(event.target.value);
    };
    
    const handelFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue("");
    }

    return (
        <section className="form">
            <form onSubmit={handelFormSubmit}>
                <section className="myUnOrdList">
                    <div>
                        <input type="text"
                            autoComplete="off"
                            value={inputValue}
                            onChange={handeInputChange}
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </section>
            </form>
        </section>
    );
}