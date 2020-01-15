import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


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
            todo: PropTypes.string.isRequired
        })
    )
}

export default TodoLists;