// actions/todoActions.ts

import { Todo } from '../types'; // assuming you have defined Todo type

// Action Types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_FILTER_COMPLETED = 'SET_FILTER_COMPLETED';

// Action Creators
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: { text },
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const toggleComplete = (id: number) => ({
  type: TOGGLE_COMPLETE,
  payload: { id },
});

export const editTodo = (id: number, text: string) => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const setFilterCompleted = (completed: boolean | null) => ({
  type: SET_FILTER_COMPLETED,
  payload: { completed },
});
