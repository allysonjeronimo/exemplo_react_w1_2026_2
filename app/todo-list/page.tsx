"use client"

import Pagina from "../components/pagina.component";
import { TodoForm } from "../components/todo-list/todo-form.component";

export default function TodoListPage(){

    function addTodo(text: string){
        console.log("Adicionando tarefa: ", text)
    }

    return (
        <Pagina titulo="TodoList" subtitulo="Exemplo de Todo-List em react">
            <TodoForm addTodo={addTodo}/>

        </Pagina>
    )
}