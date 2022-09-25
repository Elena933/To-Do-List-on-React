import React from 'react';
import {useState} from "react";
import AddToDo from "./toDoList/AddToDo";

function OpenInput(props) {
    const [openAddInput, setOpenAddInput] = useState(false)

    function toggleAddTask() {
        setOpenAddInput(!openAddInput)
    }

    return (
        <>
            {!openAddInput && <button onClick={toggleAddTask} >{props.buttonLabel}</button>}
            {openAddInput && <AddToDo toggleAddTask={toggleAddTask} inputFunction={props.inputFunction} task={props.task} />}
        </>
    );
}

export default OpenInput;
