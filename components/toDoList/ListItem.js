import React from 'react';
import OpenInput from "../OpenInput";

function ListItem(props) {
    return (
        <div>
            {props.task.title}
            <button onClick={() => props.moveUp(props.task.id)} disabled={props.index === 0}>↑</button>
            <button onClick={() => props.moveDown(props.task.id)} disabled={props.index === props.list}>↓</button>
            <button onClick={() => props.addToCart(props.task.id)}>Add to cart</button>
            <button onClick={() => props.deleteTask(props.task.id)}>X</button>
            <OpenInput buttonLabel={'Update'}inputFunction={props.updateTask} task={props.task}/>
        </div>
    );
}

export default ListItem;
