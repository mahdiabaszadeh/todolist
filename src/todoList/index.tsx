import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../store/reducers";
import {
  addTodo,
  deleteTodo,
  toggleComplete,
  editTodo,
  setFilterCompleted,
} from "../store/actions/todoActions"; // assuming you have defined these actions

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => {
    if (state.todo.filterCompleted === null) {
      return state.todo.todos;
    } else {
      return state.todo.todos.filter(
        (todo) => todo.completed === state.todo.filterCompleted
      );
    }
  });
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  };

  const handleEditTodo = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditIndex(id);
      setEditValue(todoToEdit.text);
    }
  };

  const handleSaveEdit = () => {
    dispatch(editTodo(editIndex!, editValue));
    setEditIndex(null);
  };

  const handleFilter = (completed: boolean | null) => {
    dispatch(setFilterCompleted(completed));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex items-center mb-4 w-full">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter todo..."
          className="py-2 px-4 w-full rounded-l border border-gray-300 focus:outline-none"
        />
        <motion.button
          onClick={handleAddTodo}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="py-2 px-4 bg-green-500 text-white rounded-r hover:bg-green-600 focus:outline-none flex items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add
        </motion.button>
      </div>
      <div className="flex mb-4">
        <motion.button
          onClick={() => handleFilter(null)}
          className="mx-3 bg-amber-500 text-dark py-2 px-4 rounded hover:bg-amber-200 focus:outline-none flex items-center"
        >
          All
        </motion.button>
        <motion.button
          onClick={() => handleFilter(true)}
          className="mx-3 bg-teal-500 text-dark py-2 px-4 rounded hover:bg-teal-200 focus:outline-none flex items-center"
        >
          Completed
        </motion.button>
        <motion.button
          onClick={() => handleFilter(false)}
          className="mx-3 bg-rose-500 text-dark py-2 px-4 rounded hover:bg-rose-200 focus:outline-none flex items-center"
        >
          Incomplete
        </motion.button>
      </div>
      <div className="overflow-auto w-full">
        <ul className="w-full">
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`bg-white rounded-lg shadow-md overflow-hidden mb-4 ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              <div className="flex justify-between items-center py-2 px-4 border-b border-gray-300">
                <div className="flex items-center">
                  <motion.input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id)}
                    whileHover={{ scale: 1.1 }}
                    className="mr-2"
                  />
                  {editIndex === todo.id ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="py-1 px-2 border border-gray-300 rounded focus:outline-none"
                    />
                  ) : (
                    <span>{todo.text}</span>
                  )}
                </div>
                <div>
                  {editIndex === todo.id ? (
                    <motion.button
                      onClick={handleSaveEdit}
                      whileHover={{ scale: 1.1 }}
                      className="mr-2 text-green-500 hover:text-green-600 focus:outline-none"
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={() => handleEditTodo(todo.id)}
                      whileHover={{ scale: 1.1 }}
                      className="mr-2 text-blue-500 hover:text-blue-600 focus:outline-none"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </motion.button>
                  )}
                  <motion.button
                    onClick={() => handleDeleteTodo(todo.id)}
                    whileHover={{ scale: 1.1 }}
                    className="text-red-500 hover:text-red-600 focus:outline-none"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </motion.button>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
