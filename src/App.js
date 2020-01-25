import React, { useEffect } from 'react';
import './App.css';
import TodoLists from './components/TodoLists';
import { useSelector, useDispatch } from 'react-redux';
import * as taskActions from './actions/task'

function App() {
  const dispatch = useDispatch();
  const { todoLists } = useSelector(state => state.todoLists);

  useEffect(() => {
    dispatch(taskActions.fetchListTaskRequest());
  }, [dispatch])


  return (
    <div className="App">
      {
        (todoLists === undefined || todoLists.length === 0) ? <h1>Loading...</h1> : <TodoLists todos={todoLists} />
      }
    </div>
  );
}

export default App;
