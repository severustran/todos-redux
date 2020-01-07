import React from 'react';
import './App.css';
// import store from './store'; first way
import { useSelector } from 'react-redux';


function App() {
  // const todoLists = store.getState(); first way
  const todoLists = useSelector(state => state)
  return (
    <div className="App">
        {todoLists.map((todo) => {
          return (
          <h2 key={todo.id}>{todo.title}</h2>
          )
        })}
    </div>
  );
}

export default App;
