import React from "react";

const Todolist = (props)=>{

    return(

        <>
        <div className="todoList " >
         <li >
                                {props.text}

                                <button onClick={()=>{
                                    props.onSelect(props.id)}} className="icon" type="text"><i className="fas fa-trash"></i> </button>

                                </li>
                               
        </div>
        </>

    )
    }

    export default Todolist;