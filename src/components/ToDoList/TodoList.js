import React, { useState } from "react";

const TodoList = (props) => {
  const [newInputText, setNewInputText] = useState(props.todoObj.text)
  const [editMode, setEditMode] = useState(false);
  const textValue = props.todoObj.text,
        todoId = props.todoObj.id;

  console.log('todoId:', todoId);

  const updateText = (e) => {
    setNewInputText(e.target.value);
  }

  const toggleDisplay = () => {
    setEditMode(!editMode);
  };

  const updateTodoAndUI = () => {
    props.updateTodoText(newInputText, todoId);
    toggleDisplay();
  }

  return (
    <div>
      {editMode ? (
        <div>
        <input type="text" value={newInputText} onChange={updateText}></input>
        {/* value */}
        <button onClick={updateTodoAndUI}>Save</button>
      </div>
      ) : (
        <div>
          <div className="todo-item">{props.todoObj.text}</div>
          <button className="edit-btn" onClick={toggleDisplay}>
            Edit
          </button>
          <button className="delete-btn" onClick={()=>props.deleteTodo(todoId)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
