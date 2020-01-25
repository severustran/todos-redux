import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import './App.css';
import TodoLists from './components/TodoLists';
// import store from './store'; first way
import { useSelector, useDispatch, connect } from 'react-redux';
import * as taskActions from './actions/task'

class App1 extends React.Component {
  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTaskRequest } = taskActionCreators;
    fetchListTaskRequest();
  }

  render() {
    const { todoLists } = this.props;
    console.log(todoLists);
    return (
      <div className="App">
        {
          (todoLists == undefined || todoLists.length == 0) ? <h1>Loading...</h1> : <TodoLists todos={todoLists} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoLists: state.todoLists.todoLists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App1);
