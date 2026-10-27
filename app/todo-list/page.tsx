"use client"

import { useState } from "react";
import Pagina from "../components/pagina.component";
import { TodoForm } from "../components/todo-list/todo-form.component";
import { TodoItem } from "../components/todo-list/todo-item.component";
import { TodoList } from "../components/todo-list/todo-list.component";
import { Todo } from "../components/todo-list/todo.types";

export default function TodoListPage(){

    const [todos, setTodos] = useState<Todo[]>([])
    const [nextId, setNextId] = useState(1)

    function addTodo(text: string){

        const newTodo: Todo = {
            id: nextId,
            text: text,
            completed: false
        }
 
       setTodos(
         [...todos, newTodo]
       )

       setNextId(nextId + 1)
    }

    function onDelete(id: number){
        const newTodos = todos.filter((item: Todo) => item.id !== id)
        setTodos(newTodos)
    }

    function onCompleted(id: number){
        // vamos percorrer os todos
        // para cada todo verificar
        // se o id é igual ao id informado (da tarefa selecionada)
            // se for: retorna um novo objeto Todo com todos os 
            // atributos iguais, exceto o completed que é invertido
        // caso contrário: retorna o objeto original
        // no fim, o array é atualizado
        const newTodos = todos.map((item: Todo) => {
            if(item.id === id){
                return {...item, completed: !item.completed}
            }
            else{
                return item
            }
        })

        setTodos(newTodos)
    }

    return (
        <Pagina titulo="TodoList" subtitulo="Exemplo de Todo-List em react">
            <TodoForm addTodo={addTodo}/>

            <TodoList
                todos={todos}
                onDelete={onDelete}
                onCompleted={onCompleted}
            />

        </Pagina>
    )
}