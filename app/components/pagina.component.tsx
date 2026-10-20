
import Link from "next/link";
import { Title } from "./title.component";

export default function Pagina(props: any) {

    return (
        <div className="flex min-h-screen">
            <aside className="bg-blue-900 p-6 w-64 flex flex-col gap-6">
                <h1 className="text-xl font-black">Logo</h1>
                <ul>
                    <Link href="/"><li>Início</li></Link>
                    <Link href="/contador"><li>Contador</li></Link>
                    <Link href="/todo-list"><li>TodoList</li></Link>
                </ul>
            </aside>
            <main className="bg-gray-800 p-6 flex-1 flex flex-col gap-6">
                <Title
                    main={props.titulo}
                    subtitle={props.subtitulo}
                />
                <div>
                    {props.children}
                </div>
            </main>
        </div>
    )
}