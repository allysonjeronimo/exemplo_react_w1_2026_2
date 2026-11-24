import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

type RouteContext = {
    params: Promise<{id: string}>
}

// endpoint para remover tarefa
export async function DELETE(
    request: Request,
    {params}: RouteContext
){
    const {id} = await params

    await prisma.todo.delete({
        where: {
            id: Number(id)
        }
    })

    return new NextResponse(null, {status: 204})
}

// endpoint para editar tarefa
export async function PATCH(){

}