import React, {useState} from 'react';

function AddToDo(props) {

    const [inputTask, setInputTask] = useState(props.task !==undefined ? props.task.title : '')
    const saveButtonHandler = () => {
            props.inputFunction(inputTask, props.task === undefined ? null : props.task.id)
            props.toggleAddTask()
        }

        return (
            <div>

                <input type='text' placeholder='add your task here' value={inputTask}
                       onChange={(event) => setInputTask(event.target.value)}/>
                <button onClick={saveButtonHandler}>Save</button>
                <button onClick={props.toggleAddTask}>Cancel</button>
            </div>
        );

}
    export default AddToDo;
