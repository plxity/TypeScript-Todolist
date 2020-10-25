import { combineReducers, Store } from 'redux'
import { todoReducer } from './todos'
import { Todo } from "../actions";

export interface StoreState {
  todos: Todo[];
}
export const reducer = combineReducers<StoreState>({
  todos: todoReducer
})