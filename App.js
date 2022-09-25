import './App.css';
import ToDoList from "./components/toDoList/ToDoList";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
    const [list, setList] = useState([
        {

            title: 'LearnJS',
            id: uuidv4(),
            isDone: false,
            cart: false
        },
        {
            title: 'LearnReact',
            id: uuidv4(),
            isDone: false,
            cart: true
        }
    ])
    const addNewTask = (title) => {
        setList([...list,
            {
                id: uuidv4(),
                title,
                isDone: false
            }])
    }
    const deleteTask = (id) => {
        const updateDeleteTask =
            list.filter(el => el.id !== id)
        setList(updateDeleteTask)
    }
    const moveUp = (id) => {
        const newList = [...list]
        const currentIndex = list.indexOf(newList.find(el => el.id === id))
        const currentTask = newList[currentIndex]
        newList[currentIndex] = newList[currentIndex - 1]
        newList[currentIndex - 1] = currentTask
        setList(newList)
    }

    const moveDown = (id) => {
        const newList = [...list]
        const currentIndex = list.indexOf(newList.find(el => el.id === id))
        const currentTask = newList[currentIndex]
        newList[currentIndex] = newList[currentIndex + 1]
        newList[currentIndex + 1] = currentTask
        setList(newList)
    }
    const addToCart = (id) => {
      const newList = list.map(el=>el.id === id ? {...el, cart: !el.cart}: el)
        setList(newList)
    }
    const updateTask = (title,id) => {
        const updatedList = list.map(el=> el.id===id ? {...el, title: title}:el)
        setList(updatedList)

    }

    return (
        <div className="App">
            <ToDoList list={list} addNewTask={addNewTask}
                      moveUp={moveUp}
                      moveDown={moveDown}
                      deleteTask={deleteTask}
                      addToCart={addToCart}
                      updateTask={updateTask}

            />
        </div>
    );
}

export default App;
