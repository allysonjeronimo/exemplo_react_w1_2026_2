"use client"

import { useState, useEffect } from "react";
import Pagina from "../components/pagina.component";
import { TodoForm } from "../components/todo-list/todo-form.component";
import { TodoList } from "../components/todo-list/todo-list.component";
import { Todo } from "../components/todo-list/todo.types";
import ServiceStorage from "../services/storage.service";

const STORED_TODOS_KEY = "todos"

export default function TodoListPage(){

    const [todos, setTodos] = useState<Todo[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // executar no momento da inicialização do componente

        const storedTodos = ServiceStorage.get<Todo[]>(STORED_TODOS_KEY)

        if(storedTodos){
            setTodos(storedTodos)
        }

        setIsLoaded(true)

    }, []) // dependencia externa: executar bloco novamente se houver mudanças no array


    // Salvar lista de todos no storage
    useEffect(() => {

        if(isLoaded){
             ServiceStorage.set<Todo[]>(STORED_TODOS_KEY, todos)
        }
    
    }, [todos, isLoaded])


    function nextId() : number{
        return  todos.reduce((max, todo) => {
            if(max > todo.id){
                return max
            }
            return todo.id
        }, 0) + 1
    }

    function addTodo(text: string){

        const newTodo: Todo = {
            id: nextId(),
            text: text,
            completed: false
        }
 
        const newTodos = [...todos, newTodo]
        
        sortTodos(newTodos)
        setTodos(newTodos)
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

        sortTodos(newTodos)
        setTodos(newTodos)
    }

    function sortTodos(todos: Todo[]){
        todos.sort((a, b) => {

            return Number(a.completed) - Number(b.completed)

            /*if(!a.completed && b.completed){
                return -1
            }
            else if(a.completed && !b.completed){
                return 1
            }
            else{
                return 0
            }*/
        })
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