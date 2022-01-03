import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/ToDoList/TodoList';

function App() {
  let [todoArray, setTodoArray] = useState([]);

  const addTodo = (obj) => {
    setTodoArray([...todoArray,obj])
  }

  const deleteTodo = (todoId) => {
    setTodoArray(todoArray.filter(item => item.id !== todoId));
  }

  const updateTodoText = (newInputText, todoId) => {
    // const freshTodo = todoArray.filter((item) => item.id === todoId)
    // freshTodo[0].text = newInputText;
    // console.log(...todoArray)
    // setTodoArray([...todoArray])
    const objIndex = todoArray.findIndex(item => item.id === todoId);
    const todoArrayCopy = JSON.parse(JSON.stringify(todoArray));
    todoArrayCopy[objIndex].text = newInputText;
    setTodoArray(todoArrayCopy)
  }
  console.log('todoArray', todoArray)

  return (
    <div className="App">
      <Form addTodo={addTodo}/>

      {todoArray.map(item => <TodoList todoObj={item} deleteTodo={deleteTodo} updateTodoText={updateTodoText}/>)}
    </div>
  );
}

export default App;
