import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}
interface AppState {
  fetchingTodo: boolean;
}
class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      fetchingTodo: false,
    };
  }
  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetchingTodo: false });
    }
  }
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetchingTodo: true });
  };
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);

    console.log(this.state.fetchingTodo)
  };
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetchingTodo ? 'Loading...' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos,
  };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
