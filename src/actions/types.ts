import { fetchTodosAction, deleteTodoAction } from './todos'
export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = fetchTodosAction | deleteTodoAction;