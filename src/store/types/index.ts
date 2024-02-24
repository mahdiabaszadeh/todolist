export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const EDIT_TODO = "EDIT_TODO";
export const SET_FILTER_COMPLETED = "SET_FILTER_COMPLETED";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  filterCompleted: boolean | null;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

interface ToggleCompleteAction {
  type: typeof TOGGLE_COMPLETE;
  payload: number;
}

interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: { id: number; text: string };
}

interface SetFilterCompletedAction {
  type: typeof SET_FILTER_COMPLETED;
  payload: boolean | null;
}

export type TodoAction =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleCompleteAction
  | EditTodoAction
  | SetFilterCompletedAction;
