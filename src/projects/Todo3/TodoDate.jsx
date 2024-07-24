import { useState } from "react";

export const TodoDate = () => {

    const [dateTime, setdateTime] = useState("");

    setInterval(() => {
        const now = new Date();
        const formatedDate = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();
        setdateTime(`${formatedDate} - ${formatedTime}`);
    }, 1000);

    return <h2>{dateTime}</h2>
}