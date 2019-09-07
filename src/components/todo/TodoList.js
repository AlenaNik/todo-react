import React from 'react';
import {ListItem} from "./TodoListItem";
import PropTypes from 'prop-types';

export const TodoList = (props) => {
    return (
        <div className="Todo-List">
            <ul>
                {props.todos.map(todo =>
                   <ListItem key={todo.id} {...todo}/>
                )}
            </ul>
        </div>
    );
};


TodoList.propTypes = {
    todos:  PropTypes.array.isRequired
}

