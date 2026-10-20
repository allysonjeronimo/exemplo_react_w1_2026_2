"use client"

import { CircleX, Dices, StepBack, StepForward } from "lucide-react"
import { useState } from "react"


export function Counter(props: any){

    // Hooks = Funções especiais do React que permitem adicionar funcionalidades aos componentes funcionais

    const [count, setCount] = useState(props.initialValue ?? 0)

    function incrementar(){
        setCount(count + 1)
    }

    function decrementar(){
        if(count > 0)
            setCount(count - 1)
    }

    function zerar(){
        setCount(0)
    }

    function randomizar(){
        setCount(Math.floor(Math.random() * 100) + 1)
    }

    return (
        <div className="counter-container">
            <h1 className="text-lg font-bold">{count}</h1>
            <div className="flex gap-2">
                <button className="btn btn-primary" onClick={incrementar}>
                    <StepForward/>
                </button>
                <button className="btn btn-secondary" onClick={decrementar}>
                    <StepBack/>
                </button>
                <button className="btn btn-danger" onClick={zerar}>
                    <CircleX/>
                </button>
                 <button className="btn btn-success" onClick={randomizar}>
                    <Dices/>
                </button>
            </div>
        </div>
    )
}