import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAPI } from '../actions/addTodoAction'

const AddTodo = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({});

    const handleOnChange = e => {
        setInput({
            ...input,
            title: e.target.value
        });
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        dispatch(addTodoAPI(input));
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