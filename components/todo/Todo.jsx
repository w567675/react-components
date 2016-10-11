import React, {
    Component,
    PropTypes,
} from 'react';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Todo';
    }
    render() {
        return (
          <li
            style={{
                textDecoration: this.props.completed ? 'line-through' : 'none',
                cursor: this.props.completed ? 'default' : 'pointer',
            }}
            onClick={this.props.onClick}
          >
            {this.props.text}
          </li>
        );
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
};
