import Pagina from "./components/pagina.component";

// JSX = Permite escrever HTML dentro do JavaScript
export default function Home() {

  // <Tag attr1="valor1", attr2="valor"/>

  // export function Tag(props: any){}
  // props.attr1, props.attr2

  // <Tag>Conteúdo</Tag>

  // export function Tag(props: any){
  // props.children

  return (
    <Pagina titulo="Página Inicial" subtitulo="Bem-vindo ao React!">
      <span>Conteúdo da página HOME</span>
    </Pagina>
  )
}
