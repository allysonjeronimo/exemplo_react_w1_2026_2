import { Title } from "./title.component";
import { Menu } from "./menu.component";
import { Calculator, House, ListTodo } from "lucide-react";

const menuItems = [
    {text: "Home", link: "/", icon: House},
    {text: "Contador", link: "/contador", icon: Calculator},
    {text: "Todo List", link: "/todo-list", icon: ListTodo},
]

export default function Pagina(props: any) {
    return (
        <div className="flex min-h-screen">
            <aside className="page-side-bar">
                <h1 className="text-xl font-black">Logo</h1>
                <Menu items={menuItems}/>
            </aside>
            <main className="page-content">
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