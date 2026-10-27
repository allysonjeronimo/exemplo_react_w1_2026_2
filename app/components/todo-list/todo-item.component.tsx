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

    return (
        <li>
            <input
                type="checkbox"
                onChange={() => onCompleted(todo.id)}
            />

            <span>
                Minha Tarefa
            </span>

            <button onClick={() => onDelete(todo.id)}>
                Excluir
            </button>
        </li>
    )
}