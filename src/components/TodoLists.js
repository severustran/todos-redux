import React, { Fragment } from 'react';

const Todo = ({ value }) => {
    return (
        <li> {value} </li>
    )
}

const TodoLists = ({ todos }) => {
    return (
        <Fragment>
            {
                todos.map(({ id, name }) => (
                    <Todo key={id} value={name} />
                ))
            }
        </Fragment>
    )
}

export default TodoLists;