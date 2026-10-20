import { LucideIcon } from "lucide-react";
import Link from "next/link";

type MenuItemProps = {
    text: string,
    link: string,
    icon: LucideIcon
}

export function MenuItem(props: MenuItemProps){

    const Icon = props.icon

    return (
        <Link href={props.link}>
            <li className="flex gap-2 p-2 rounded-lg hover:bg-blue-700">
                <Icon size={20}/>
                <span>{props.text}</span>
            </li>
        </Link>
    )
}