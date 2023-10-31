import React from 'react'
import { TodoItem } from "./TodoItem";

export default function Todos(props) {

    return (
        <div className="container" >

            {
                props.todos.map((todo) => {
                    // console.log(todo.sno);
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}
