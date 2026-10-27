"use client"

import Pagina from "../components/pagina.component";
import { TodoForm } from "../components/todo-list/todo-form.component";
import { TodoItem } from "../components/todo-list/todo-item.component";
import { Todo } from "../components/todo-list/todo.types";

export default function TodoListPage(){

    function addTodo(text: string){
        console.log("Adicionando tarefa: ", text)
    }

    function onDelete(id: number){

    }

    function onCompleted(id: number){

    }

    const newTodo: Todo = {
        id: 1,
        text: "Tarefa de Teste",
        completed: false
    }

    return (
        <Pagina titulo="TodoList" subtitulo="Exemplo de Todo-List em react">
            <TodoForm addTodo={addTodo}/>

            <TodoItem 
                todo={newTodo}
                onCompleted={onCompleted}
                onDelete={onDelete}
            />
            
        </Pagina>
    )
}