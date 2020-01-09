import React, { useEffect } from 'react';
import './App.css';
// import store from './store'; first way
import { useSelector, useDispatch } from 'react-redux';
import {fetchData} from './store/actions/loadDataAction';

function App() {
  // const todoLists = store.getState(); first way
  const todoLists = useSelector(state => state.todoLists);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  return (
    <div className="App">
        {todoLists.map((todo, index) => {
          return (
          <h2 key={index}>{todo.title}</h2>
          )
        })}
    </div>
  );
}

export default App;
