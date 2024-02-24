// reducers/todoReducer.ts

import { Todo } from "../types"; // assuming you have defined Todo type
import { Reducer } from "redux";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE,
  EDIT_TODO,
  SET_FILTER_COMPLETED,
} from "../actions/todoActions";

// Define the interface for the todo state
interface TodoState {
  todos: Todo[];
  filterCompleted: boolean | null;
}

// Define the interface for actions
interface Action {
  type: string;
  payload: any; // You can replace 'any' with a specific payload type if needed
}

// Define the initial state
const initialState: TodoState = {
  todos: [],
  filterCompleted: null,
};

// Define the reducer function
const todoReducer: Reducer<TodoState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload.text, completed: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    case SET_FILTER_COMPLETED:
      return {
        ...state,
        filterCompleted: action.payload.completed,
      };
    default:
      return state;
  }
};

export default todoReducer;
