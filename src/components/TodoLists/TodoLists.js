import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';


const TodoLists = ({todos}) => {
    return (
        <div>
            {
                todos.map(({title}, index) => <TodoItem key={index} todo={title} />)
            }
        </div>
    )
}

TodoLists.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            todo: PropTypes.string.isRequired
        })
    ).isRequired
}

export default TodoLists;