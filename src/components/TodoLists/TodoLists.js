import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

const TodoLists = ({todos}) => {
    return (
        <Fragment>
            {
                todos.map(({title}, index) => <TodoItem key={index} todo={title} />)
            }
        </Fragment>
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