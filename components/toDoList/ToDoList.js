import React, {useState} from 'react';
import ListItem from "./ListItem";
import AddToDo from "./AddToDo";
import CartList from "../cartList/CartList";
import addToDo from "./AddToDo";
import OpenInput from "../OpenInput";

function ToDoList(props) {

    return (
        <div>
            <h1> To Do List</h1>
            <OpenInput inputFunction={props.addNewTask} buttonLabel={'Add new task'}/>
            {props.list.filter(el => !el.cart).map((el, index) => <ListItem key={el.id}
                                                                            task={el}
                                                                            moveUp={props.moveUp}
                                                                            index={index}
                                                                            moveDown={props.moveDown}
                                                                            deleteTask={props.deleteTask}
                                                                            addToCart={props.addToCart}
                                                                            updateTask={props.updateTask}
            />)}
            <hr/>
            <h1>Cart List</h1>
            <CartList list={props.list} deleteTask={props.deleteTask} addToCart={props.addToCart}/>

        </div>
    );
}

export default ToDoList;
