"use client"

import { useState } from "react"

type TodoFormProps = {
    addTodo: (text: string) => void
}

export function TodoForm(props: TodoFormProps){

    const [text, setText] = useState("")

    function handleAddTodo(){
        const todoText = text.trim()

        if(!todoText){
            return
        }

        props.addTodo(todoText)
        setText("")
    }

    return (
        <div className="flex gap-2">
            <input 
                className="input-text" 
                type="text"
                placeholder="Nome da tarefa..."
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAddTodo}>
                Adicionar
            </button>
        </div>
    )
}