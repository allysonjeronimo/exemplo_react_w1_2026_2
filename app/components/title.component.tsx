export function Title(props: any){
    // JSX
    return (
        <div className="flex flex-col">
            <h1 className="text-lg font-bold">{props.main ?? "Título padrão"}</h1>
            <h2 className="text-sm text-gray-500">{props.subtitle}</h2>
        </div>
    )
}