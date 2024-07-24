import { useState } from "react";

export const TodoDate = () => {

    const [dateTime, setdateTime] = useState("");

    setInterval(() => {
        const now = new Date();
        const formatedDate = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();
        setdateTime(`${formatedDate} - ${formatedTime}`);
        // console.log(now.toLocalTimeString());
    }, 1000);

    return <h2>{dateTime}</h2>
}