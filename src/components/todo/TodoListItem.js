import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = (props) => {
    return (
            <li>
                <input type="checkbox" defaultChecked={props.isComplete}/>
                {props.name}
            </li>
    );
};

ListItem.propTypes = {
   name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
    id: PropTypes.number.isRequired
}
