import React from 'react';

export const ListItem = (props) => {
    return (
            <li>
                <input type="checkbox" defaultChecked={props.isComplete}/>
                {props.name}
            </li>
    );
};

