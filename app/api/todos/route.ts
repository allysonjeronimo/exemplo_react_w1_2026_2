import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// endpoint: consulta de todos (GET)
export async function GET(){
    // faz consulta no banco usando o prisma
    const todos = await prisma.todo.findMany({
        orderBy: {
            id: "asc"
        }
    })

    // retorna o resultado convertido em json
    return NextResponse.json(todos)
}

// endpoint de cadastro de tarefas (POST)
export async function POST(request: Request){

    // obtem o corpo da requisição em json
    const body = await request.json()

    // insere registro no banco de retorna tarafa criada
    const newTodo = await prisma.todo.create({
        data: {
            text: body.text
        }
    })

    // retorna a tarefa e codigo de sucesso 201 (recurso criado)
    return NextResponse.json(newTodo, {status: 201})
}