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
            <li className="menu-item">
                <Icon size={20}/>
                <span>{props.text}</span>
            </li>
        </Link>
    )
}