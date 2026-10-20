import { Counter } from "../components/counter.component";
import Pagina from "../components/pagina.component";

export default function ContadorPage(){
    return (
        <Pagina titulo="Contador" subtitulo="Exemplo de contador no react">
            <Counter/>
            <Counter initialValue={100}/>
            <Counter initialValue={500}/>
        </Pagina>
    )
}