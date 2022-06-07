import React, {useState} from "react";

export default function Form(props) {
    const [input, setinput] = useState("");

    const handleChange = e => {
        setinput(e.target.value)
    }
   
    const handleSubmit= (e) => {
        e.preventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 1000000),
            text: input,
            iscomplate: false
        })
        setinput('')
    }
    return (
    <form className="form">
    <input type="text" placeholder="Add a new Task" onChange={handleChange} className="todo-input" value={input} name="text"></input>
    <button type="submit" onClick={handleSubmit} className="todo-btn">ADD</button>
    </form>
    );
}