import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = (props) => (
        <div>
            <form>
                <input type="text"
                       onChange={props.handleInputChange}
                       value={props.currentTodo}/>
            </form>
        </div>
    );

TodoForm.propTypes = {
    currentTodo:  PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
}
