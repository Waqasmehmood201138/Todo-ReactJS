import React from "react";
import { useState } from "react";

import Todolist from "./Todolist";


const TodoApp = (props) => {

    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])

    const handleChange = (event) => {



        setInputList(event.target.value)

    }

    const listOfItems = () => {


        setItems((olditems) => {

            return [...olditems, inputList];

        });
        setInputList("");

    }

    const DeleteItems = (id) => {


        setItems((olditems) => {

            return olditems.filter((arrElem, index) => {
                return index !== id;

            })
        })
    }

    const handleClearAll = ()=>{

        setItems([])
        
    }


    return (
        <>
            <div className="wrapper">
                <header>Todo App</header>
                <div className="inputField">
                    <input value={inputList} onChange={handleChange} type="text" placeholder="Add your new todo" />
                    <button  type="button" onClick={listOfItems} disabled={inputList.length<1}><i className="fas fa-plus"></i></button>
                </div>

                <ul className="todoList ">

                    {
                        items.map((element, index) => {
                            return (

                                <Todolist key={index} id={index} text={element} onSelect={DeleteItems} />
                            )
                        })
                    }
                </ul>

                <div className="footer">
                    <span>You have <span className="pendingTasks">{items.length}</span> pending tasks</span>
                    <button disabled={items.length<0}  onClick={handleClearAll}>Clear All</button>
                </div>
            </div>
        </>
    )
}

export default TodoApp;