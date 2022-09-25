import React from 'react';

function CartItem(props) {
    return (
        <div>
            {props.task.title}
            <button onClick={()=>props.deleteTask(props.task.id)}>Delete</button>
            <button onClick={()=>props.addToCart(props.task.id)}>Back to list</button>
        </div>
    );
}

export default CartItem;
