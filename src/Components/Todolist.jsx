import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todolist = (props)=>{

    return(

        <>
        <div className="todoList " >
         <li >
                                {props.text}

                                <button onClick={()=>{
                                    props.onSelect(props.id)}} className="icon" type="text"><FontAwesomeIcon icon={faTrash} /></button>

                                </li>
                               
        </div>
        </>

    )
    }

    export default Todolist;