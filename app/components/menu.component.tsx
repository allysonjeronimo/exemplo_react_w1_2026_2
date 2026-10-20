import { MenuItem } from "./menu-item.component";

type MenuProps = {
    items: any[]
}

export function Menu(props: MenuProps){
    return (
        <ul>
            {
                props.items.map((item: any) => (
                    <MenuItem
                        key={item.link}
                        text={item.text}
                        link={item.link}
                        icon={item.icon}
                   />
                ))
            }
        </ul>
    )
}