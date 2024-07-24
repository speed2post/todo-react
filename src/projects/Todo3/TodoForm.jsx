import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
    const objValue = { id: "", content: "", checked: false }
    const [inputValue, setInputValue] = useState({});

    const handeInputChange = (event) => {
        objValue.id = event.target.value;
        objValue.content = event.target.value;
        objValue.checked = false;
        setInputValue(objValue);        
    };

    const handelFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue(objValue);
    }

    return (
        <section className="form">
            <form onSubmit={handelFormSubmit}>
                <section className="myUnOrdList">
                    <div>
                        <input type="text"
                            autoComplete="off"
                            value={inputValue.content}
                            onChange={handeInputChange}
                            // onChange={e => handeInputChange(e)}
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