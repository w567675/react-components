import React, {
    Component,
    PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, VisibilityFilters } from './actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        console.log(this.props);
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
          <div>
            <AddTodo onAddClick={text => dispatch(addTodo(text))} />
            <TodoList
              todos={this.props.visibleTodos}
              onTodoClick={index => dispatch(completeTodo(index))}
            />
            <Footer
              filter="SHOW_ALL"
              onFilterChange={filter => console.log('filter change', filter)}
            />
          </div>
        );
    }
}

App.PropTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.required,
        completed: PropTypes.bool.required,
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE',
    ]).isRequired,
};


function selectTodos(todos, filter) {
    switch (filter) {
    case VisibilityFilters.SHOW_ALL:
    default:
        return todos;
    case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
    }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。
function select(state) {
    console.log(state);
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter,
    };
}

export default connect(select)(App);
