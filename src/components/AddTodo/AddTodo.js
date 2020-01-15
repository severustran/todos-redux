import React, { useState } from 'react';

const AddTodo = (props) => {
    const [input, setInput] = useState({});

    const handleOnChange = e => {
        setInput({
            ...input,
            todo: e.target.value
        });
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(input);
        handleReset();
    }

    const handleReset = () => {
        setInput('');
        document.getElementById('input_todo').value = "";
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                Task:
                <input id="input_todo" type="text" name="name" onChange={handleOnChange}/>
            </label>
            <input type="submit" value="Submit" onClick={handleOnSubmit}/>
        </form>
    )
}

export default AddTodo;