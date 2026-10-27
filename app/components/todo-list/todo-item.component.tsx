"use client"

import { Todo } from "./todo.types"

type TodoItemProps = {
    todo: Todo,  
    onCompleted: (id: number) => void,
    onDelete: (id: number) => void  
}

export function TodoItem(props: TodoItemProps){

    const todo = props.todo
    const onCompleted = props.onCompleted
    const onDelete = props.onDelete

    const textStyle = todo.completed ? "line-through" : ""

    return (
        <li className="flex px-4 py-2 items-center gap-4 bg-gray-900 rounded-md">
            
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onCompleted(todo.id)}
            />

            <span className={`flex-1 text-lg ${textStyle}`}>
                {todo.text}
            </span>

            <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
                Excluir
            </button>
        </li>
    )
}