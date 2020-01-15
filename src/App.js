import React, { useEffect } from 'react';
import TodoLists from './components/TodoLists/TodoLists';
import AddTodo from './components/AddTodo/AddTodo';
import './App.css';
// import store from './store'; first way
import { useSelector, useDispatch } from 'react-redux';
import {fetchData} from './actions/loadDataAction';

function App() {
  // const todoLists = store.getState(); first way
  const todoLists = useSelector(state => state.todoLists);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  return (
    <div className="App">
        {/* {todoLists.map((todo, index) => {
          return (
          <h2 key={index}>{todo.title}</h2>
          )
        })} */}
        <AddTodo />
        <TodoLists todos = {todoLists}/>
    </div>
  );
}

export default App;
