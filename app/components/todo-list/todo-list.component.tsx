"use client"

import { TodoItem } from "./todo-item.component"
import { Todo } from "./todo.types"

type TodoListProps = {
    todos: Todo[],
    onDelete: (id: number) => void,
    onCompleted: (id: number) => void
}

export function TodoList(props: TodoListProps){
    
    if(props.todos.length === 0){
        return (
            <p className="tex-lg p-4">Nenhuma tarefa cadastrada.</p>
        )
    }
    
    return (
        <ul className="flex flex-col gap-2 py-4">
            {
                props.todos.map((item: Todo) => (
                    <TodoItem
                        key={item.id}
                        todo={item}
                        onDelete={props.onDelete}
                        onCompleted={props.onCompleted}
                    />
                ))
            }
        </ul>
    )
}